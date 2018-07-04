import React from "react";
import Movies from "./Movies.js";
import {movies} from "./example_data.js";

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Movies movies = {movies}/>
      </div>      
    );
  }
 
}

export default MovieList;