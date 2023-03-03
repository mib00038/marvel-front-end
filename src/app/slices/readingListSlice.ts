import {createSlice, Draft} from '@reduxjs/toolkit'

export interface ReadingListState {
	comics: any[];
	length: number;
}

const initialState: ReadingListState = { comics: [], length: 0 }

const readingListSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		addComic: (draft: Draft<ReadingListState>, action) => {
			draft.comics.push(action.payload);
			draft.length = draft.comics.length;
		},
		removeComicWithId: (draft: Draft<ReadingListState>, action) => {
			draft.comics = draft.comics.filter((comic) => comic.id !== action.payload)
			draft.length = draft.comics.length;
		},
	},
})

export const readingListSliceActions = readingListSlice.actions
export default readingListSlice