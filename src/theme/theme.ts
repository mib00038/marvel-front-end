import {createTheme} from "@mui/material/styles";
import {colors} from "./colors";

declare module '@mui/material/styles' {
	interface Palette {
		primary20: Palette['primary'];
		white: Palette['primary'];
		neutral10: Palette['primary'];
		neutral30: Palette['primary'];
		neutral70: Palette['primary'];
	}

	interface PaletteOptions {
		primary20?: PaletteOptions['primary'];
		white?: PaletteOptions['primary'];
		neutral10?: PaletteOptions['primary'];
		neutral30?: PaletteOptions['primary'];
		neutral70?: PaletteOptions['primary'];
	}
}


export const theme = createTheme({
	typography: {
		fontFamily: ["Roboto Condensed", "Roboto", "Helvetica", "Arial", "sans-serif"].join(',')
	},
	palette: {
		primary: {
			main: colors.primary,
		},
		primary20: {
			main: colors.primary20,
		},
		neutral10: {
			main: colors.neutral10
		},
		neutral30: {
			main: colors.neutral30
		},
		neutral70: {
			main: colors.neutral70
		},
		white: {
			main: colors.white
		},
		background: {
			default: colors.background
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				'root': {
					color: colors.white
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					color: colors.white,
				},
			},
		},
	},
});

export default theme;