import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const url = `http://localhost:5000/api/movies/${id}`;
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieInfo(data));
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(movieInfo);
  const { title, image, detailDesc } = movieInfo;

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Card
        sx={{
          maxWidth: 1000,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop:"50px"
        }}
      >
        <CardMedia
          sx={{ maxWidth: "400px" }}
          image={image}
          title="green iguana"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detailDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete} size="small">
            Delete
          </Button>
          <Button onClick={() => navigate(`/`)} size="small">
            Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default MovieDetail;
