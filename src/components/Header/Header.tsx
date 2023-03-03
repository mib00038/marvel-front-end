import {Link, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as Bookmark} from "../../assets/bookmark.svg";
import {RootState, useTypedSelector} from "../../app/store";

const Header = ({readingListOnClick}) => {
	const comics = useTypedSelector((state: RootState) => state.readingList.comics);
	const count = comics.length;

	return (
		<div style={{width: "100%", display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
			<Typography variant='h4' sx={{fontSize: "2.75rem", fontWeight: 700}}>Comics</Typography>
			<Link
				component="button"
				underline='hover'
				sx={{display: 'flex', justifyContent: 'space-between'}}
				onClick={readingListOnClick}
			>
				<SvgIcon component={Bookmark} />
				<span style={{fontSize: '1.25rem', fontWeight: 400}}>{`Reading List (${count})`}</span>
			</Link>
		</div>
	)
}

export default Header;