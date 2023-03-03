import { combineReducers } from 'redux';
import {baseApi} from "../services/baseApi";
import page from './pageSlice';
import readingList from './readingListSlice';
import characterFilter from "./characterFilterSlice";

const rootReducer = combineReducers({
	page: page.reducer,
	readingList: readingList.reducer,
	characterFilter: characterFilter.reducer,
	[baseApi.reducerPath]: baseApi.reducer,
})

export default rootReducer