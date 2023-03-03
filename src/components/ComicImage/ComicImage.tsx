import React, {useState} from "react";
import MarvelIconButton from "../MarvelIconButton/MarvelIconButton";
import {Fade, Grow, styled, SvgIcon} from "@mui/material";
import { ReactComponent as Plus } from "../../assets/plus.svg"
import {useDispatch} from "react-redux";
import {readingListSliceActions} from "../../app/slices/readingListSlice";
import {isEmpty} from "lodash";
import imageNotFoundUrl from "../../assets/image-not-found.png";
import {RootState, useTypedSelector} from "../../app/store";
import withStyledPropOption from "../../theme/utils/withStyledPropOption";

const ComicImage = ({comic}) => {
	const dispatch = useDispatch()
	const handleAddButtonOnClick = () => dispatch(readingListSliceActions.addComic(comic))
	const comics = useTypedSelector((state: RootState) => state.readingList.comics);
	const isReadingComic = comics?.findIndex((item) => item.id === comic.id) !== -1
	const imageUrl = !isEmpty(comic?.images)
		? comic.images[0].path + "." + comic.images[0]["extension"]
		: imageNotFoundUrl;

	const [imageLoaded, setImageLoaded] = useState(false)

	return (
		<>
			<Fade in={imageLoaded} timeout={600}>
				<StyledImage src={imageUrl} alt="comic cover image" onLoad={() => setImageLoaded(true)} />
			</Fade>

			{imageLoaded && !isReadingComic && (
				<Grow in={imageLoaded} timeout={800}>
					<StyledIconButtonContainer>
						<MarvelIconButton
							startIcon={<SvgIcon fontSize="inherit" component={Plus} inheritViewBox />}
							label='Add'
							onClick={handleAddButtonOnClick}
						/>
					</StyledIconButtonContainer>
				</Grow>
			)}
		</>
	)
}

const StyledImage = styled('img', withStyledPropOption("imageLoaded"))<{imageLoaded: boolean}>(({imageLoaded}) => ({
	objectFit: "contain",
	width: "100%",
	...(!imageLoaded && {
	display: "hidden"
	})
}));

const StyledIconButtonContainer = styled('div')({
	position: "absolute",
	fontSize: "1rem",
	width:"100%",
	bottom: "1.5rem",
	display: "flex",
	justifyContent: "center"
});

export default ComicImage;