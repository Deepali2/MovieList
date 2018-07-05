import React from "react";
import PropTypes from 'prop-types';
import style from "./styles/style.css"


var MovieEntry = (props) => {  
  return (
      <div className={style.MovieEntry}>
        {props.movie.title}
      </div>
  );  
}

MovieEntry.propTypes= {
  movie: PropTypes.object.isRequired
}
// MovieEntry.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string
//   }).isRequired
// };

export default MovieEntry;

