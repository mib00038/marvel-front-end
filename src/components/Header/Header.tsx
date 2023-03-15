import {Link, styled, SvgIcon, Typography, useMediaQuery, useTheme} from "@mui/material";
import {ReactComponent as Bookmark} from "../../assets/bookmark.svg";
import {RootState, useAppSelector} from "../../app/store";

const Header = ({readingListOnClick}) => {
	const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const comics = useAppSelector((state: RootState) => state.readingList.comics);
	const count = comics.length;
	const readingListText = mdDown ? `(${count})` : `Reading List (${count})`;

	return (
		<div style={{width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
			<ComicsHeader variant='h4' >
				Comics
			</ComicsHeader>
			<Link
				component="button"
				underline='hover'
				sx={{display: 'flex', justifyContent: 'space-between'}}
				onClick={readingListOnClick}
				data-testid="reading-list-element"
			>
				<SvgIcon component={Bookmark} />
				<span style={{fontSize: '1.25rem', fontWeight: 400}}>{readingListText}</span>
			</Link>
		</div>
	)
}

const ComicsHeader = styled(Typography)(({theme}) => ({
	fontWeight: 700,
	fontSize: "2.75rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1.75rem",
	}
}));

export default Header;