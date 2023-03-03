import React from "react";
import {Container, Grid, Stack, styled, Typography} from '@mui/material'
import {useComicsQuery} from "../../app/services/comicsApi";
import Pagination from "../Pagination/Pagination";
import MarvelLogo from "../MarvelLogo/MarvelLogo";
import Header from "../Header/Header";
import {RootState, useTypedSelector} from "../../app/store";
import ComicImage from "../ComicImage/ComicImage";
import FilterCharacter from "../FilterCharacter/FilterCharacter";
import SideDrawer from "../SideDrawer/SideDrawer";
import useSideDrawer from "../../hooks/useSideDrawer";

const Page = () => {
  const page = useTypedSelector((state: RootState) => state.page);
  const characterId = useTypedSelector((state: RootState) => state.characterFilter.characterId);
  const {data, isLoading} = useComicsQuery({page, characterId});
  const {open, setOpen, toggleDrawer} = useSideDrawer();

  if (isLoading) {
    return null;
  }

  const results = data?.data?.results;
  const totalComics = data?.data?.total;

  return (
    <StyledContainer disableGutters>
      <StyledStack alignItems="center" spacing={2}>
        <MarvelLogo />
        <Stack spacing={3} sx={{width: "100%", p: "2rem 1rem 0.5rem 1rem"}}>
          <Header readingListOnClick={() => setOpen(true)}/>
          <FilterCharacter />
        </Stack>
        <SideDrawer open={open} toggleDrawer={toggleDrawer} />
        <Grid container sx={{width: "100%"}} spacing={2} rowSpacing={6}>
          {results?.map((comic) => (
            <Grid item xs={12} sm={12} md={12} lg={6} key={comic.id}>
              <Grid container sx={{width: "100%"}} spacing={2}>
                <Grid item xs={12} sm={6} style={{position: "relative", height: "100%"}}>
                  <ComicImage comic={comic} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{fontWeight: 700, lineHeight: "2.75rem", fontSize: "2rem"}}
                  >
                    {comic.title}
                  </Typography>
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

const StyledContainer = styled(Container)(({theme}) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
}));

const StyledStack = styled(Stack)(({theme}) => ({
  width: "100%",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  }
}));

export default Page
