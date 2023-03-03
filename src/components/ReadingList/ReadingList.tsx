import React, {useEffect} from "react";
import {IconButton, List, ListItem, ListItemText, styled, Typography} from "@mui/material";
import {RootState, useTypedSelector} from "../../app/store";
import {ReactComponent as DeleteIcon} from "../../assets/delete.svg";
import {useDispatch} from "react-redux";
import {readingListSliceActions} from "../../app/slices/readingListSlice";

const ReadingList = () => {
	const dispatch = useDispatch();
	const comics = useTypedSelector((state: RootState) => state.readingList.comics);

	useEffect(() => {
		console.log({comics})
	}, [comics])

	return (
		<>
			<Header label='Reading List' />
			<StyledList dense={true}>
				{comics.map(({id, title, thumbnail: {path, extension }}) => {
					const handleDeleteButtonOnClick = () => dispatch(readingListSliceActions.removeComicWithId(id));
					const imgUrl = path + "." + extension;

					return (
						<StyledListItem
							key={id}
							secondaryAction={
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={handleDeleteButtonOnClick}
								>
									<DeleteIcon />
								</IconButton>
							}
						>
							<StyledThumbnail src={imgUrl} alt="thumbnail" width={32} height='auto' />
							<ListItemText
								primaryTypographyProps={{style:{fontSize: "0.875rem", fontWeight: 700}}}
								primary={title}
							/>
						</StyledListItem>
					)
				})}
			</StyledList>
		</>
	);
}

const Header = ({label}) => <StyledTypography variant='h6'>{label}</StyledTypography>

const StyledListItem  = styled(ListItem)({
	paddingLeft: "0.5rem",
	paddingRight: 0
});

const StyledThumbnail = styled('img')({
	marginRight: "0.5rem"
});

const StyledList = styled(List)({
	padding: "1rem",
	width: "15.5rem"
});

const StyledTypography = styled(Typography)({
	fontSize: '1.25rem',
	padding: "1rem 8.5rem 1.25rem 1.25rem",
	borderBottom: "1px solid black"
});


export default ReadingList;