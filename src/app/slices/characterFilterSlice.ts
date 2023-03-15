import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

export interface FilterCharacterState {
	characterId: number;
	characterName: string;
}

const initialState: FilterCharacterState = { characterId: 1011334, characterName: "3D-Man" }

const characterFilterSlice = createSlice({
	name: 'characterFilter',
	initialState,
	reducers: {
		updateCharacterFilter: (draft: Draft<FilterCharacterState>, action: PayloadAction<FilterCharacterState>) => {
			draft.characterId = action.payload.characterId;
			draft.characterName = action.payload.characterName;
		},
	},
})

export const characterFilterSliceActions = characterFilterSlice.actions
export default characterFilterSlice