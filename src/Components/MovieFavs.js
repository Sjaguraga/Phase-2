import React from "react";
import Movies from "./Movies";
import { v4 as uuidV4 } from "uuid";

function MovieFavs({ favMovies, addFavoriteMovies }) {
  return (
    <div className="favs">
      {favMovies.map((movie) => {
        return (
          <Movies
            key={uuidV4()}
            movie={movie}
            addFavoriteMovies={addFavoriteMovies}
          />
        );
      })}
    </div>
  );
}

export default MovieFavs;
