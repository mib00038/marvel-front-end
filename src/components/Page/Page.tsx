import React from "react";
import {Container, Grid, Stack, styled} from '@mui/material'
import {useComicsQuery} from "../../app/services/comicsApi";
import Pagination from "../Pagination/Pagination";
import MarvelLogo from "../MarvelLogo/MarvelLogo";
import Header from "../Header/Header";
import {RootState, useAppSelector} from "../../app/store";
import ComicImage from "../ComicImage/ComicImage";
import FilterCharacter from "../FilterCharacter/FilterCharacter";
import SideDrawer from "../SideDrawer/SideDrawer";
import useSideDrawer from "../../hooks/useSideDrawer";
import ComicDescription from "../ComicDescription/ComicDescription";

const Page = () => {
  const page = useAppSelector((state: RootState) => state.page);
  const characterId = useAppSelector((state: RootState) => state.characterFilter.characterId);
  const {data, isLoading} = useComicsQuery({page, characterId});
  const {open, setOpen, toggleDrawer} = useSideDrawer();

  if (isLoading) {
    return null;
  }

  const comics = data?.data?.results;
  const totalComics = data?.data?.total;

  return (
    <StyledContainer disableGutters maxWidth='xl'>
      <StyledStack direction="column" alignItems="center" spacing={2}>
        <MarvelLogo />
        <Stack spacing={3} sx={{width: 1, p: "2rem 1rem 0 1rem"}}>
          <Header readingListOnClick={() => setOpen(true)}/>
          <FilterCharacter />
        </Stack>
        <SideDrawer open={open} toggleDrawer={toggleDrawer} />
          <Grid container sx={{width: 1}} spacing={2} rowSpacing={{xs: 4, sm: 4, md: 6}}>
            {comics?.map((comic) => (
              <Grid key={comic.id} data-testid="comic-grid-item" item xs={12} sm={12} md={12} lg={6} >
                <Grid container sx={{width: 1}} spacing={2}>
                  <Grid item xs={12} sm={6} sx={{position: "relative", height: 1}}>
                    <ComicImage comic={comic} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <ComicDescription comic={comic} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>

        <Pagination totalComics={totalComics} />
      </StyledStack>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const StyledStack = styled(Stack)(({theme}) => ({
  width: "100%",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  }
}));

export default Page
