import {ReactNode} from "react";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/theme";

interface CustomThemeProviderProps {
	children: ReactNode;
}

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
