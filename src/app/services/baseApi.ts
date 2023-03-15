import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'https://gateway.marvel.com/v1/public/';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 5 });

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({}),
});
