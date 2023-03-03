import {createSlice, Draft} from '@reduxjs/toolkit'

export interface PageState {
	value: number;
	offset: number
}

const initialState: PageState = { value: 0, offset: 0 }

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		increment: (draft: Draft<PageState>) => {
			draft.value++
			draft.offset = draft.value * 4
		},
		decrement: (draft: Draft<PageState>) => {
			draft.value--
			draft.offset = draft.value * 4
		},
		reset: (draft: Draft<PageState>) => {
			draft.value = 0;
			draft.offset = 0;
		}
	},
})

export const pageSliceActions = pageSlice.actions
export default pageSlice