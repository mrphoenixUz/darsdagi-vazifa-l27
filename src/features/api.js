import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000', // Update to your backend's base URL
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => '/books',
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
    }),
    getUserProfile: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetBooksQuery,
  useAddBookMutation,
  useGetUserProfileQuery
} = api;
