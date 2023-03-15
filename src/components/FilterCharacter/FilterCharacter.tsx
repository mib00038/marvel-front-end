import {useCharactersQuery} from "../../app/services/charactersApi";
import {Chip, Stack, styled} from "@mui/material";
import {RootState, useAppDispatch, useAppSelector} from "../../app/store";
import {characterFilterSliceActions, FilterCharacterState} from "../../app/slices/characterFilterSlice";
import {pageSliceActions} from "../../app/slices/pageSlice";
import withStyledPropOption from "../../theme/utils/withStyledPropOption";

const FilterCharacter = () => {
	const {data, isSuccess, isLoading, isError, error} = useCharactersQuery({});
	const characterId = useAppSelector((state: RootState) => state.characterFilter.characterId);

	if (isError) {
		return null
	}
	const results = data?.data?.results;

	const dispatch = useAppDispatch()
	const handleChipOnClick = (character: FilterCharacterState) => {
		dispatch(characterFilterSliceActions.updateCharacterFilter(character));
		dispatch(pageSliceActions.reset());
	}

	return (
		<StyledStack direction="column" spacing={1}>
			<StyledHeader>Filter by character</StyledHeader>
			<StyledChipListStack direction="row" >
				{results?.map(({id, name}) => {
					const isFiltered = id === characterId;
					const clickable = !isFiltered;

					return (
						<StyledChip
							key={id}
							label={name}
							color="default"
							variant="outlined"
							clickable={clickable}
							isFiltered={isFiltered}
							onClick={() => handleChipOnClick({characterId: id, characterName: name})}
							data-testid={`filter-chip-${name}`}
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
	color: theme.palette["neutral70"],
	fontSize: "1.125rem",
	margin: "0 1rem",
}));

const StyledStack = styled(Stack)(({theme}) => ({
	width: "100%",
	backgroundColor: theme.palette["neutral30"],
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
	color: theme.palette["white"],
	backgroundColor: theme.palette["neutral30"],
	borderColor: "transparent",
	...(isFiltered && {
		backgroundColor: theme.palette["neutral10"],
		borderColor: "initial",
	}),
	fontSize: "1.125rem",
	[theme.breakpoints.down("md")]: {
		fontSize: "1rem"
	}
}));

export default FilterCharacter;