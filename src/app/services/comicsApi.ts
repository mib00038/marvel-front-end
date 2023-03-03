import { baseApi } from './baseApi';
import md5 from "md5";

export const Comics = 'comics';

const comicsApi = baseApi
	.enhanceEndpoints({addTagTypes: [Comics]})
	.injectEndpoints({
		endpoints: (builder: any) => ({
			comics: builder.query({
				query: ({page, characterId}) => {

					console.log({page, characterId})
					const ts = Math.floor(Date.now() / 1000);
					const apikey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
					const privateKey = import.meta.env.VITE_MARVEl_PRIVATE_KEY;
					const hash = md5(ts + privateKey + apikey);

					return {
						url: `characters/${characterId}/comics`,
						params: {offset: page.value * 4, limit:4, ts, apikey, hash}
					}
				},
				providesTags: ({data: {results}}) => {
					console.log({results})
					return results ? results.map(({id}) => ({type: Comics, id})) : [Comics]
				}
			}),
		}),
		overrideExisting: false,
	});

export const { useComicsQuery } = comicsApi;