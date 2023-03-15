import "whatwg-fetch";
import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import mediaQuery from "css-mediaquery";

import type { store as AppStore, RootState } from '../app/store'
// As a basic setup, import your same slice reducers
import rootReducer from "../app/slices";
import {setupStore} from "../app/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		// Automatically create a store instance if no store was passed in
		store = setupStore({ reducer: rootReducer, preloadedState }),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>
	}

	// Return an object with the store and all of RTL's query functions
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export function createMatchMedia(width) {
	return (query) => ({
		matches: mediaQuery.match(query, {
			width,
		}),
		addListener: () => {},
		removeListener: () => {},
	});
}