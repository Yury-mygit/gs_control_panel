import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import settings from "../settings";

export const pageApi = createApi({
    reducerPath: 'pageApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${settings.server}` }),
    endpoints: (builder) => ({
      getPageData: builder.query({
        // query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
        query: () => `state`,
      }),
      getOnePageData: builder.query({
        // query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
        query: (id) => `page/${id}`,
      }),
      getTaskPageData: builder.query({
        // query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
        query: () => `tasks`,
      }),
      getNewsBlockData: builder.query({
        // query: ({start, limit = ''}) => `posts?_start=${start}&_limit=${limit}`,
        query: () => `news`,
      }),
    }),
  })

  export const {
    useGetPageDataQuery, 
    useGetTaskPageDataQuery, 
    useGetOnePageDataQuery,
    useGetNewsBlockDataQuery,
  } = pageApi