import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import settings from "../common/settings";


export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${settings.server}` }),
    tagTypes: ['tasks'],
    endpoints: (build) =>  ({
        getTasks: build.query
        ({
          query: () => `tasks`,
          providesTags: (result) =>
          // is result available?
          result
            ? // successful query
              [
                ...result.map(({ id }) => ({ type: 'tasks', id })),
                { type: 'tasks', id: 'LIST' },
              ]
            : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
              [{ type: 'tasks', id: 'LIST' }],      
        }),
       

        updateTasks: build.mutation({
          query(body) {
              return {
              url: `tasks`,
              method: 'PATCH',
              body,
              }
          },
          invalidatesTags: ['tasks']
      }),
       
    }),


  })

  export const
  {
    useGetTasksQuery,
    useUpdateTasksMutation,
  } = tasksApi