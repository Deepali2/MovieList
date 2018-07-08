import React from "react";
import MovieEntry from "./MovieEntry.js";
import style from "./styles/style.css";
import PropTypes from 'prop-types';



var Movies = (props) => {  
  return (
    <div>      
        <div className={style.movies}>
          {props.movies.map((movie, index) => <MovieEntry movie={movie} index = {index} key = {`${movie}${index}`} watchedClickHandler = {props.watchedClickHandler} />)}
      </div>  
    </div>    
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  watchedClickHandler: PropTypes.func.isRequired,
};

export default Movies;


