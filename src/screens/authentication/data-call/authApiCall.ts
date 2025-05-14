import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEV;

export const authApiCall = createApi({
  reducerPath: "authApis",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    sendotpService: builder.mutation({
      query: (body) => ({
        url: "/sendotp",
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    verifyotpService:builder.mutation({
      query:(body)=>({
        url:'/verifyOTP',
         method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      })
    })
  }),
});

// Export hooks
export const { useSendotpServiceMutation, useVerifyotpServiceMutation } = authApiCall;
