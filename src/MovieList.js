import React from "react";
import Movies from "./Movies.js";
import {movies} from "./example_data.js";
import style from "./styles/style.css"

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <div className={style.MovieListTitle}>
          <h1>Movie List</h1>
        </div>
      <Movies movies = {movies}/>
      </div>      
    );
  }
 
}

export default MovieList;