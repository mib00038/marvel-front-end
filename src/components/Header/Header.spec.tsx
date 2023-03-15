import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from './Header'
import {createMatchMedia, renderWithProviders} from "../../utils/test-utils";

describe("Desktop Header Component", () => {
	beforeAll(() => {
		window.matchMedia = createMatchMedia(1200);
	});

	it('shows Comics text', async () => {
		await renderWithProviders(<Header/>)

		const comicsTextElement = screen.getByText("Comics");
		expect(comicsTextElement).toBeInTheDocument();


	});

	it('shows Link with Reading List text in desktop view', async () => {
		renderWithProviders(<Header/>)

		const readingListElement = screen.getByTestId("reading-list-element");
		expect(readingListElement).toHaveTextContent("Reading List");
	})
});

describe("Mobile Header Component", () => {
	beforeAll(() => {
		window.matchMedia = createMatchMedia(400);
	});

	it('shows Comics text', async () => {
		await renderWithProviders(<Header/>)

		const comicsTextElement = screen.getByText("Comics");
		expect(comicsTextElement).toBeInTheDocument();


	});

	it('Link with Reading List text does not display', async () => {
		renderWithProviders(<Header/>)

		const readingListElement = screen.getByTestId("reading-list-element");
		expect(readingListElement).not.toHaveTextContent("Reading List");
	})
});