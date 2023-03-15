import "whatwg-fetch";
import {fetch, Headers, Request, Response} from 'cross-fetch';
import {setupServer} from "msw/node";
import {rest} from "msw";
import {BASE_URL} from "./src/app/services/baseApi";
import mockedCharactersData from "./src/components/FilterCharacter/mockedCharactersData";
import mocked3DManComicsDataOffset0 from "./src/components/Page/mockedData/3Dman/mocked3DManComicsDataOffset0";
import mocked3DManComicsDataOffset4 from "./src/components/Page/mockedData/3Dman/mocked3DManComicsDataOffset4";
import mocked3DManComicsDataOffset8 from "./src/components/Page/mockedData/3Dman/mocked3DManComicsDataOffset8";
import mockedABombComicsDataOffset0 from "./src/components/Page/mockedData/3Dman/mockedABombComicsDataOffset0";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const THREE_D_MAN_API_ID = 1011334;
const A_BOMB_HAS_API_ID = 1017100;

const handlers = [
	rest.get(BASE_URL + 'characters', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedCharactersData))
	}),
	rest.get(BASE_URL + `characters/${THREE_D_MAN_API_ID}/comics`, (req, res, ctx) => {
		const offset = req.url.searchParams.get('offset');

		switch (offset) {
			case '0' :
				return res(ctx.status(200), ctx.json(mocked3DManComicsDataOffset0));
			case '4' :
				return res(ctx.status(200), ctx.json(mocked3DManComicsDataOffset4));
			case '8' :
				return res(ctx.status(200), ctx.json(mocked3DManComicsDataOffset8));
			default :
				console.error(`mocked data with ${offset} not found`);
				return null;
		}
	}),
	rest.get(BASE_URL + `characters/${A_BOMB_HAS_API_ID}/comics`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(mockedABombComicsDataOffset0));
	})
]
const server = setupServer(...handlers);
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());