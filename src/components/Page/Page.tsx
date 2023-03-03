import React from "react";
import {Container, Grid, Stack, Typography} from '@mui/material'
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
    <Container sx={{display: "flex", width: "100%", justifyContent: "center"}}>
      <Stack alignItems="center" spacing={2} sx={{width: "100%"}}>
        <MarvelLogo />
        <Stack spacing={3} sx={{width: "100%", p: "2rem 1rem 0.5rem 1rem"}}>
          <Header readingListOnClick={() => setOpen(true)}/>
          <FilterCharacter />
        </Stack>
        <SideDrawer open={open} toggleDrawer={toggleDrawer} />
        <Grid container sx={{width: "100%"}} spacing={2} rowSpacing={6}>
          {results?.map((comic) => (
            <Grid item xs={6} key={comic.id}>
              <Grid container sx={{width: "100%"}} spacing={2}>
                <Grid item xs={6} style={{position: "relative", height: "100%"}}>
                  <ComicImage comic={comic} />
                </Grid>
                <Grid item xs={6}>
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
      </Stack>
    </Container>
  )
}

export default Page
