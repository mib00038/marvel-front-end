import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { baseApi } from './services/baseApi'
import rootReducer from "./slices";

export const createStore = (
	options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(baseApi.middleware),
		...options,
	})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector