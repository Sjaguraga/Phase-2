import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieFavs from "./MovieFavs";

function MoviesMain() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=spider man&apikey=6e4caee6";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  // function addFavoriteMovies(movie) {
  //   if (!favMovies.includes(movie)) setFavMovies([...favMovies, movie]);
  // }

  function addFavoriteMovies(movieObj) {
    if (favMovies.includes(movieObj) === false) {
      setFavMovies([...favMovies, movieObj]);
    }
  }

  return (
    <div className="main">
      <MovieList movies={movies} addFavoriteMovies={addFavoriteMovies} />
      <MovieFavs favMovies={favMovies} addFavoriteMovies={addFavoriteMovies} />
    </div>
  );
}

export default MoviesMain;
