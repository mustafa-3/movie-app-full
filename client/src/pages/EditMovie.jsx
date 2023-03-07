import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function EditMovie() {
  const { id } = useParams();
  // const [movieInfo, setMovieInfo] = useState([]);
  const url = `http://localhost:5000/api/movies/${id}`;
  const [form, setForm] = useState({
    title: "",
    desc: "",
    detailDesc: "",
    image: "",
  });

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setForm(data));
  };
  useEffect(() => {
    getData();
    // const { title, image, detailDesc, desc } = movieInfo;
    // setForm({
      // title: title,
      // image: image,
      // detailDesc: detailDesc,
      // desc: desc,
    // });
  }, []);

  // console.log(movieInfo);

  // console.log(id);

  const navigate = useNavigate();

  const handleEdit = async (e) => {
    e.preventDefault();
    // console.log(form);

    await axios.put(`http://localhost:5000/api/movies/${id}`, form);
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Movie
          </Typography>
          <Box component="form" onSubmit={handleEdit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              type="text"
              autoFocus
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="desc"
              label="desc"
              name="desc"
              type="text"
              autoFocus
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="detailDesc"
              label="detailDesc"
              name="detailDesc"
              type="text"
              autoFocus
              value={form.detailDesc}
              onChange={(e) => setForm({ ...form, detailDesc: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="image"
              type="text"
              id="image"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Movie
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
