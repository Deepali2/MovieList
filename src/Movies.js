import React from "react";
import MovieEntry from "./MovieEntry.js";
import { movies } from "./example_data.js";

class Movies extends React.Component {
  render() {
    return (
      <div>
        {movies.map(movie => <MovieEntry movie={movie}/>)}                
      </div>
    );
  }

}


export default Movies;
