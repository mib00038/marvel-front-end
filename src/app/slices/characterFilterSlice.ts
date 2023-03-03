import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

export interface FilterCharacterState {
	characterId: number;
}

const initialState: FilterCharacterState = { characterId: 1011334 }

const characterFilterSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		updateCharacterFilter: (draft: Draft<FilterCharacterState>, action: PayloadAction<number>) => {
			draft.characterId = action.payload
		},
	},
})

export const characterFilterSliceActions = characterFilterSlice.actions
export default characterFilterSlice