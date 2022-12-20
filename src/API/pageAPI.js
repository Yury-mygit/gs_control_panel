import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import settings from "../common/settings";

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
        query: (limit='', skip = 0) => `news?${limit && `_limit=${limit}`}`,
      }),


      addNews: builder.mutation({
        query(body) {
          return {
            url: `addnews`,
            method: 'POST',
            body,
          }
        },
        // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
        // that newly created post could show up in any lists.
        // invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
      }),

      updateNews: builder.mutation({
        query(body) {
          return {
            url: `updatenews`,
            method: 'POST',
            body,
          }
        },
        // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
        // that newly created post could show up in any lists.
        // invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
      }),

    }),


    


  })

  export const {
    useGetPageDataQuery, 
    useGetTaskPageDataQuery, 
    useGetOnePageDataQuery,
    useGetNewsBlockDataQuery,
    useAddNewsMutation,
    useUpdateNewsMutation,
  } = pageApi