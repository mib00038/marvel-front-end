import {styled, SvgIcon} from "@mui/material";
import { ReactComponent as Logo } from "../../assets/marvel-logo.svg";

const MarvelLogo = () => {
	return (
		<StyledMarvelLogoContainer>
			<SvgIconWrapper>
				<SvgIcon component={Logo} inheritViewBox sx={{width: "inherit", height:"inherit"}} />
			</SvgIconWrapper>
		</StyledMarvelLogoContainer>
	)
}

const StyledMarvelLogoContainer = styled('div')({
	padding: "0.25rem",
	marginTop: "0.5rem",
	backgroundColor: "red",
	width: "fit-content"
});

const SvgIconWrapper = styled('div')(({theme}) => ({
	width: "auto",
	height: 44,
	[theme.breakpoints.down('sm')]: {
		height:	"2rem",
	}
}));

export default MarvelLogo;