import React from "react";
import Movies from "./Movies";
import { v4 as uuidv4 } from "uuid";

function MovieList({ movies, addFavoriteMovies }) {
  return (
    <div className="list">
      {movies.map((movie) => {
        return (
          <Movies
            key={uuidv4()}
            movie={movie}
            addFavoriteMovies={addFavoriteMovies}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
