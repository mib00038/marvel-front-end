import {useCharactersQuery} from "../../app/services/charactersApi";
import {Chip, Stack, styled} from "@mui/material";
import {RootState, useTypedSelector} from "../../app/store";
import {useDispatch} from "react-redux";
import {characterFilterSliceActions} from "../../app/slices/characterFilterSlice";
import {pageSliceActions} from "../../app/slices/pageSlice";
import withStyledPropOption from "../../theme/utils/withStyledPropOption";

const FilterCharacter = () => {
	const {data, isSuccess, isLoading, isError, error} = useCharactersQuery({});
	const characterId = useTypedSelector((state: RootState) => state.characterFilter.characterId);

	if (isError) {
		return null
	}
	const results = data?.data?.results;console.log({results, characterId})

	console.log({data, results})

	const dispatch = useDispatch()
	const handleChipOnClick = (id: number) => {
		dispatch(characterFilterSliceActions.updateCharacterFilter(id));
		dispatch(pageSliceActions.reset());
	}

	return (
		<StyledStack direction="column" spacing={1}>
			<StyledHeader>Filter by character</StyledHeader>
			<StyledChipListStack direction="row" >
				{results?.map((character) => {
					const isFiltered = character.id === characterId;
					const clickable = !isFiltered;

					return (
						<StyledChip
							key={character.id}
							label={character.name}
							color="default"
							variant="outlined"
							clickable={clickable}
							isFiltered={isFiltered}
							onClick={() => handleChipOnClick(character.id)}
						/>
					)
				})}
			</StyledChipListStack>
		</StyledStack>
	)
}

const StyledChipListStack = styled(Stack)(({theme}) => ({
	paddingLeft: "0.25rem",
	paddingRight: "0.25rem",
	flexWrap: "wrap",
}));

const StyledHeader = styled("h3")(({theme}) => ({
	color: theme.palette["neutral70"].main,
	fontSize: "1.125rem",
	margin: "0 1rem",
}));

const StyledStack = styled(Stack)(({theme}) => ({
	width: "100%",
	backgroundColor: theme.palette["neutral30"].main,
	borderRadius: "1rem",
	padding: "1.5rem 1.5rem 1.5rem 0.5rem",
	[theme.breakpoints.down("md")]: {
		paddingTop: "1rem",
		paddingBottom: "1rem",
	}
}));

const StyledChip =  styled(Chip, withStyledPropOption('isFiltered'))<{isFiltered: boolean}>
	(({theme, isFiltered}) => ({
	fontFamily: "Roboto, san-serif",
	color: theme.palette["white"].main,
	backgroundColor: theme.palette["neutral30"].main,
	borderColor: "transparent",
	...(isFiltered && {
		backgroundColor: theme.palette["neutral10"].main,
		borderColor: "initial",
	}),
	fontSize: "1.125rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem"
	}
}));

export default FilterCharacter;