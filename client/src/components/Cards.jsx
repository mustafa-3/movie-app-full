import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cards({ movieData }) {
  const { title, desc, image, id } = movieData;
  // console.log(movieData);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        onClick={() => navigate(`/details/${id}`)}
        sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={image}
        title="green iguana"
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">
          Delete
        </Button>
        <Button onClick={() => navigate(`/details/${id}`)} size="small">
          Detail More
        </Button>
        <Button onClick={() => navigate(`/edit-movie/${id}`)} size="small">
          Edit Movie
        </Button>
      </CardActions>
    </Card>
  );
}
