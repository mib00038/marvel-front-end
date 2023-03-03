import { baseApi } from './baseApi';
import md5 from "md5";

export const CharactersApi = 'characters';

const charactersApi = baseApi
	.enhanceEndpoints({addTagTypes: [CharactersApi]})
	.injectEndpoints({
		endpoints: (builder: any) => ({
			characters: builder.query({
				query: ({limit = 5, offset = 0}) => {
					const ts = Math.floor(Date.now() / 1000);
					const apikey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
					const privateKey = import.meta.env.VITE_MARVEl_PRIVATE_KEY;
					const hash = md5(ts + privateKey + apikey);

					return {
						url: 'characters',
						params: {offset, limit, ts, apikey, hash}
					}
				},
				providesTags: [CharactersApi]
			}),
		}),
		overrideExisting: false,
	});

export const { useCharactersQuery } = charactersApi;