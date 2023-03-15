import React from 'react';
import '@testing-library/jest-dom'
import {screen, within} from "@testing-library/react";
import { renderWithProviders } from '../../utils/test-utils';
import ComicDescription from './ComicDescription';
import mockedComicData from "./mockedComicData";

describe('ComicDescription', function () {
	test('adds hidden list of character names', async () => {
		renderWithProviders(<ComicDescription comic={mockedComicData}/>)

		const listEl = screen.getByRole("list", { hidden: true });
		expect(listEl).toBeInTheDocument();

		const names = screen.getAllByTestId('character-name', {hidden: true})
			.map((item) => within(item).getByTestId('name').textContent);

		expect(names.length).toEqual(13);

		expect(names.find(name => name === "3-D Man")).toBeTruthy();

	});
});