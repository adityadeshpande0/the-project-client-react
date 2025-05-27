import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthToken, selectAuthToken } from "../screens/authentication/authSlice";
import type { RootState } from "../redux/store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEV;

// Base fetch query with token attached
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = selectAuthToken(getState() as RootState);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Enhanced base query with auto-refresh logic
const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Attempt to get a new access token
    const refreshResult = await baseQuery(
      { url: "/refresh-token", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Update token in Redux store
      api.dispatch(setAuthToken((refreshResult.data as any).token));

      // Retry original query with new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Optional: logout user or handle refresh failure here
    }
  }

  return result;
};

export const commonApiCall = createApi({
  reducerPath: "commonApiCall",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/get-user-profile",
        method: "GET",
      }),
    }),
    getRefreshToken: builder.query({
      query: () => ({
        url: "/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetUserProfileQuery } = commonApiCall;
