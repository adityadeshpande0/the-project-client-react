import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEV;

export const commonApiCall = createApi({
  reducerPath: "commonApiCall",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (body) => ({
        url: "/user-profile",
        method: "GET",
        body,
        headers: {
          Authorization: `Bearer `,
        },
      }),
    }),
  }),
});

// Export hooks
export const { useGetUserProfileQuery } = commonApiCall;
