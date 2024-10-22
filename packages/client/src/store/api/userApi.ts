import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReauth from './baseQueryWithReauth'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<null, void>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = userApi
