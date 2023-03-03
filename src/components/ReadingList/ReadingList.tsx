import React from "react";
import {IconButton, List, ListItem, ListItemText, styled, Typography} from "@mui/material";
import {RootState, useTypedSelector} from "../../app/store";
import {ReactComponent as DeleteIcon} from "../../assets/delete.svg";
import {useDispatch} from "react-redux";
import {readingListSliceActions} from "../../app/slices/readingListSlice";

const ReadingList = () => {
	const dispatch = useDispatch();
	const comics = useTypedSelector((state: RootState) => state.readingList.comics);

	return (
		<>
			<Header label='Reading List' />
			<StyledList dense={true}>
				{comics.map(({id, title}) => {
					const handleDeleteButtonOnClick = () => dispatch(readingListSliceActions.removeComicWithId(id));

					return (
						<ListItem
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
							<ListItemText
								primaryTypographyProps={{style:{fontSize: "0.875rem", fontWeight: 700}}}
								primary={title}
							/>
						</ListItem>
					)
				})}
			</StyledList>
		</>
	);
}

const Header = ({label}) => <StyledTypography variant='h6'>{label}</StyledTypography>

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