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
    }),
  })

  export const {useGetPageDataQuery} = pageApi