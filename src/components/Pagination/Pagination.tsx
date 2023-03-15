import MarvelIconButton from "../MarvelIconButton/MarvelIconButton";
import {styled, SvgIcon} from "@mui/material";
import Box from "@mui/material/Box";
import {ReactComponent as ArrowLeft} from "../../assets/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../assets/arrow-right.svg";
import {pageSliceActions} from "../../app/slices/pageSlice";
import {RootState, useAppDispatch, useAppSelector} from "../../app/store";

const Pagination = ({totalComics}) => {
	const dispatch = useAppDispatch()
	const page = useAppSelector((state: RootState) => state.page);
	const handleNextButtonOnClick = () => dispatch(pageSliceActions.increment());
	const handlePrevButtonOnClick = () => dispatch(pageSliceActions.decrement());

	return (
		<StyledPaginationContainer>
			<MarvelIconButton
				isNav
				startIcon={<SvgIcon color="inherit" component={ArrowLeft} inheritViewBox />}
				label='Prev'
				disabled={page?.value === 0}
				onClick={handlePrevButtonOnClick}
			/>
			<MarvelIconButton
				isNav
				endIcon={<SvgIcon color="inherit" component={ArrowRight} inheritViewBox />}
				label='Next'
				sx={{ml:1}}
				disabled={4 + page?.offset >= totalComics}
				onClick={handleNextButtonOnClick}
			/>
		</StyledPaginationContainer>
	)
}

const StyledPaginationContainer = styled(Box)({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	padding: "3rem 0 4rem 0"
});

export default Pagination;