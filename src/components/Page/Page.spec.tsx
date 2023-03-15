import React from 'react';
import '@testing-library/jest-dom'
import {screen, waitFor, within, fireEvent} from '@testing-library/react'
import { renderWithProviders } from '../../utils/test-utils';
import Page from './Page';
import readingListSlice, {readingListSliceActions} from '../../app/slices/readingListSlice';

describe('Page', function () {

	test('should show 4 comics featuring "3-D Man"', async () => {
		renderWithProviders(<Page />)

		await waitFor(() => {
			const comicGridItems = screen.getAllByTestId('comic-grid-item');
			expect(comicGridItems.length).toEqual(4);

			const comicTitles = screen.getAllByTestId('comic-title').map(titleEl => titleEl.textContent);
			expect(comicTitles.length).toEqual(4);
			expect(comicTitles).toEqual([
				'Avengers: The Initiative (2007) #19',
				'Avengers: The Initiative (2007) #18',
				'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
				'Avengers: The Initiative (2007) #17'
			]);
			expectFourComicsFeatCharacter("3-D Man");
		})
	});

	test('when user clicks nav buttons, should update with next/prev 4 comics featuring 3-D Man"', async () => {
		let nextButton;
		let prevButton;

		renderWithProviders(<Page />)

		await waitFor(() => {
			nextButton = screen.getByRole('button', { name: /Next/i })
			expect(nextButton).toBeInTheDocument();
			prevButton = screen.getByRole('button', { name: /Prev/i })
			expect(prevButton).toBeInTheDocument();
		})

		fireEvent.click(nextButton);

		await waitFor(() => {
			const comicTitles = screen.getAllByTestId('comic-title').map(titleEl => titleEl.textContent);
			expect(comicTitles.length).toEqual(4);
			expect(comicTitles).toEqual([
				'Avengers: The Initiative (2007) #16',
				'Avengers: The Initiative (2007) #15',
				'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
				'Avengers: The Initiative (2007) #14'
			]);
			expectFourComicsFeatCharacter("3-D Man");
		});

		fireEvent.click(nextButton);

		await waitFor(() => {
			const comicTitles = screen.getAllByTestId('comic-title').map(titleEl => titleEl.textContent);
			expect(comicTitles.length).toEqual(4);
			expect(comicTitles).toEqual([
				'Deadpool (1997) #44',
				'Marvel Premiere (1972) #37',
				'Marvel Premiere (1972) #36',
				'Marvel Premiere (1972) #35'
			]);
			expectFourComicsFeatCharacter("3-D Man");
		});

		fireEvent.click(prevButton);

		await waitFor(() => {
			const comicTitles = screen.getAllByTestId('comic-title').map(titleEl => titleEl.textContent);
			expect(comicTitles.length).toEqual(4);
			expect(comicTitles).toEqual([
				'Avengers: The Initiative (2007) #16',
				'Avengers: The Initiative (2007) #15',
				'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
				'Avengers: The Initiative (2007) #14'
			]);
			expectFourComicsFeatCharacter("3-D Man");
		});
	});

	test('when user clicks on "A-Bomb (HAS)" character filter chip, displays 4 comics feat "A-Bomb (HAS)"', async () => {
		renderWithProviders(<Page />)

		let chipFilter;

		await waitFor(() => {
			const filters = screen.getAllByTestId("filter-chip", {exact: false});
			expect(filters.length).toEqual(5);
			expect(filters.map(filter => filter.textContent)).toEqual([
				'3-D Man',
				'A-Bomb (HAS)',
				'A.I.M.',
				'Aaron Stack',
				'Abomination (Emil Blonsky)'
			]);

			chipFilter = screen.getByTestId("filter-chip-A-Bomb (HAS)");
			expect(chipFilter).toBeInTheDocument();

		})

		fireEvent.click(chipFilter);

		await waitFor(() => {
			const comicTitles = screen.getAllByTestId('comic-title').map(titleEl => titleEl.textContent);
			expect(comicTitles.length).toEqual(4);
			expect(comicTitles).toEqual([
				'FREE COMIC BOOK DAY 2013 1 (2013) #1',
				'Hulk (2008) #55',
				'Hulk (2008) #54',
				'Hulk (2008) #53'
			]);
			expectFourComicsFeatCharacter("A-Bomb (HAS)");
		})
	});
});

const expectFourComicsFeatCharacter = (character: string) => {
	const characterlists = screen.getAllByTestId('character-name-list', {hidden: true});

	expect(characterlists.length).toEqual(4);

	const nameLists = characterlists.map(list =>
		within(list)
			.getAllByTestId('character-name', {hidden: true})
			.map((item) => within(item).getByTestId('name').textContent)
	);

	expect(nameLists.length).toEqual(4);

	nameLists.forEach(nameList => {
		expect(nameList.find(name => name === character)).toBeTruthy();
		expect(nameList.filter(name => name === character).length).toEqual(1);
	});
}