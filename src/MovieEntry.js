import React from "react";
import PropTypes from 'prop-types';
import style from "./styles/style.css"
import { WATCHED_TEXT, NOT_WATCHED_TEXT } from "./MovieConstants.js";

const watchedText = (watched) => watched ? WATCHED_TEXT : NOT_WATCHED_TEXT; 

var MovieEntry = (props) => {  
 
  return (
      <div className={style.MovieEntry}>
        {props.movie.title}
      <button className={props.movie.watchStatus ? style.watchStatusBtnGreen : style.watchStatusBtn}         
        onClick={props.watchedClickHandler(props.index)}
      >
        {watchedText(props.movie.watchStatus)}
      </button>
      </div>
  );  
}

MovieEntry.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    watchStatus: PropTypes.boolean,
  }).isRequired,
  index: PropTypes.number.isRequired,
  watchedClickHandler: PropTypes.func.isRequired,
  
};

// MovieEntry.propTypes= {
//   movie: PropTypes.object.isRequired
// }

export default MovieEntry;

