// src/api/commonApiCall.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAuthToken } from "../screens/authentication/authSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEV;

export const commonApiCall = createApi({
  reducerPath: "commonApiCall",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = selectAuthToken(getState());
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/user-profile",
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

export const { useGetUserProfileQuery, useGetRefreshTokenQuery } = commonApiCall;
