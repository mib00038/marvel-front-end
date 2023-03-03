import {Button, IconButtonProps, styled, Typography} from "@mui/material";
import withStyledPropOption from "../../theme/utils/withStyledPropOption";

interface MarvelIconButtonProps extends IconButtonProps {
	label: string;
	isNav?: boolean;
}

const MarvelIconButton = ({label, ...props}: MarvelIconButtonProps) => {
	return (
		<StyledButton {...props}>
			<Typography
				variant="h6"
				sx={{fontWeight: 700}}
			>
				{label}
			</Typography>
		</StyledButton>
	)
}

const StyledButton = styled(
	Button,
	withStyledPropOption('isNav')
)<{isNav?: boolean}>(({theme, isNav = false}) => ({
	color: 'white',
	position: "relative",
	fontFamily: "Roboto Condensed",
	borderRadius: 0,
	padding: "1rem",
	fontWeight: 700,
	textTransform: "capitalize",
	clipPath: "polygon(18% 0%, 100% 0, 100% 75%, 82% 100%, 0 100%, 0% 25%)",
	...(isNav && {
		backgroundColor: theme.palette["neutral30"].main,
		"&:hover": {
			backgroundColor: theme.palette["neutral70"].main,
		},
	}),
	...(!isNav &&  {
		backgroundColor: theme.palette["primary"].main,
		"&:hover": {
			backgroundColor: theme.palette["primary20"].main,
		},
	})
}));

export default MarvelIconButton;