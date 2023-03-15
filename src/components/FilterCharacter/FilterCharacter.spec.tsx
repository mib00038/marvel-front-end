import React from 'react';
import '@testing-library/jest-dom'
import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test-utils';
import FilterCharacters from './FilterCharacter';

describe('FilterCharacter', function () {

	test('fetches & displays list of characters chip filters', async () => {
		renderWithProviders(<FilterCharacters />)

		await waitFor(() => {
			const comicsTextElement = screen.getByText("3-D Man");
			expect(comicsTextElement).toBeInTheDocument();
			const filterList = screen.getAllByTestId("filter-chip", {exact: false}).map(chip => chip.textContent);
			expect(filterList.length).toEqual(5);
			expect(filterList).toEqual([
				'3-D Man',
				'A-Bomb (HAS)',
				'A.I.M.',
				'Aaron Stack',
				'Abomination (Emil Blonsky)'
			])
		})
	});
});