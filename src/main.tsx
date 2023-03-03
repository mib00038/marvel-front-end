import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store';
import {StyledEngineProvider} from "@mui/material/styles";
import ReduxProvider from "./components/ReduxProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
