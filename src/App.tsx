import {CssBaseline} from '@mui/material';
import Page from './components/Page/Page';
import CustomThemeProvider from "./components/CustomThemeProvider";

const App = () => (
  <CustomThemeProvider>
    <CssBaseline />
    <Page />
  </CustomThemeProvider>
);

export default App;
