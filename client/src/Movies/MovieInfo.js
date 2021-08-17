import React from "react";
import { Route } from "react-router-dom";

function MovieInfo() {
    return (
      <div>
          <h2>{movieInfo.title}</h2>
                <div className="movie-director">
                    Director: <em>{movieInfo.director}</em>
                </div>
                <div className="movie-metascore">
                    Metascore: <strong>{movieInfo.metascore}</strong>
      </div>
      </div>
    );
  }




export default MovieInfo;

  