import MarvelIconButton from "../MarvelIconButton/MarvelIconButton";
import {SvgIcon} from "@mui/material";
import Box from "@mui/material/Box";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import {useDispatch} from "react-redux";
import {pageSliceActions} from "../../app/slices/pageSlice";
import {RootState, useTypedSelector} from "../../app/store";

const Pagination = ({totalComics}) => {
	const dispatch = useDispatch()
	const page = useTypedSelector((state: RootState) => state.page);
	const handleNextButtonOnClick = () => dispatch(pageSliceActions.increment());
	const handlePrevButtonOnClick = () => dispatch(pageSliceActions.decrement());

	return (
		<Box sx={{width: "100%", display: "flex", justifyContent: "center", padding: "3rem 0 4rem 0"}}>
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
		</Box>
	)
}

export default Pagination;