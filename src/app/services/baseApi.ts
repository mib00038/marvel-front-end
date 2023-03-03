import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
	baseUrl: 'https://gateway.marvel.com/v1/public/',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 })

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({}),
})
