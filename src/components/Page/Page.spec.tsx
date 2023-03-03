import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './Page'
import ReduxProvider from "../ReduxProvider";
import {configureStore} from "@reduxjs/toolkit";

it('shows the welcome text', () => {
  const store = configureStore();
  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  const { container, getByText } = render(<Page />);
  expect(getByText(container, "Comics")).toBeInTheDocument();
  expect(getByText(container, 'Reading List')).toBeInTheDocument();
})