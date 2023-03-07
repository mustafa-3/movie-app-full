import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const FEATURED_APİ = `http://localhost:5000/api/movies`;

  const getData = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovieData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData(FEATURED_APİ);
  }, []);

  // console.log(movieData);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid sx={{marginTop:"10px"}} container spacing={2}>
          {movieData.map((item, index) => {
            return (
              <Grid xs={4} key={index}>
                <Item >
                  <Cards movieData={item} />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
