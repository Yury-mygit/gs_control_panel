import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import settings from "../settings";

// server:'http://factory/api/staging/',


export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${settings.server}` }),
    tagTypes: ['news'],
    endpoints: (build) =>  ({
        getNews: build.query({
        query: (limit=11, skip = 0) => `news?${limit && `_limit=${limit}`}`,
        providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.data.map(({ id }) => ({ type: 'news', id })),
              { type: 'news', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'news', id: 'LIST' }],
                
            
        }),
       


        addNews: build.mutation({
        query(body) {
            return {
            url: `news`,
            method: 'PUT',
            body,
            }
        },
        // invalidatesTags: [{ type: 'news', id: 'LIST' }],
        invalidatesTags:  [  'news']
        
        }),

        updateNews: build.mutation({
            query(body) {
                return {
                url: `news`,
                method: 'PATCH',
                body,
                }
            },
            invalidatesTags: ['news']
        }),
        // invalidatesTags: [{ type: 'news', id: 'LIST' }],
        
        deleteNews: build.mutation({
            query(body) {
                return {
                url: `news`,
                method: 'DELETE',
                body,
                }
            },
            invalidatesTags: ['news']
        }),
        // invalidatesTags: [{ type: 'news', id: 'LIST' }],
        
        
    }),


  })

  export const {
    useGetNewsQuery,
    useAddNewsMutation,
    useUpdateNewsMutation,
    useDeleteNewsMutation,
  } = newsApi