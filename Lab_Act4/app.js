// Binua, Ralph Gabriel B.
//3BSIT-5

const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000; // run on port 3000

app.use(express.json());

//read movies from JSON file
function readMovies() {
  const data = fs.readFileSync("movies.json", "utf-8");
  return JSON.parse(data);
}

//save movies to JSON file
function saveMovies(movies) {
  fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));
}

//get all movies
app.get("/movies", (req, res) => {
  const movies = readMovies();
  if (movies.length === 0) {
    return res.status(404).send({ message: "No movies found" });
  }
  res.send(movies);
  res
    .status(200)
    .send({ message: "Movies retrieved successfully", movies: movies });
});

// create a movie
app.post("/movies", (req, res) => {
  const movies = readMovies();
  const newMovie = req.body;
  if (!newMovie || !newMovie.title || !newMovie.year) {
    return res.status(400).send({ message: "Invalid movie data" });
  }
  movies.push(newMovie);
  saveMovies(movies);
  res
    .status(201)
    .send({ message: "Movie created successfully", movie: newMovie });
});

// get a movie by id
app.get("/movies/:id", (req, res) => {
  const movies = readMovies();
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return res.status(404).send({ message: "Movie not found" });
  }
  res
    .status(200)
    .send({ message: "Movie retrieved successfully", movie: movie });
});

// update a movie
app.put("/movies/:id", (req, res) => {
  const movies = readMovies();
  const movieId = parseInt(req.params.id);
  const movieIndex = movies.findIndex((m) => m.id === movieId);
  if (movieIndex === -1) {
    return res.status(404).send({ message: "Movie not found" });
  } else if (!req.body || !req.body.title || !req.body.year) {
    return res.status(400).send({ message: "Invalid movie data" });
  }
  const updatedMovie = { ...movies[movieIndex], ...req.body };
  movies[movieIndex] = updatedMovie;
  saveMovies(movies);
  res
    .status(200)
    .send({ message: "Movie updated successfully", movie: updatedMovie });
});

// delete a movie
app.delete("/movies/:id", (req, res) => {
  const movies = readMovies();
  const movieId = parseInt(req.params.id);
  const movieIndex = movies.findIndex((m) => m.id === movieId);
  if (movieIndex === -1) {
    return res.status(404).send({ message: "Movie not found" });
  }
  movies.splice(movieIndex, 1);
  saveMovies(movies);
  res.status(204).send({ message: "Movie deleted successfully" });
});

app.listen(port, () => {
  console.log(`MOvie API is running on http://localhost:${port}`);
});
