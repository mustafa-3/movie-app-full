const api = (module.exports = require("express").Router());

const movie = require("./controllers/movie/movie");

api.use("/movies", movie);
