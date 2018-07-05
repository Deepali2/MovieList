import React from "react";
import PropTypes from 'prop-types';
import style from "./styles/style.css"


class MovieEntry extends React.Component {
  render() {
    return (
        <div className={style.MovieEntry}>
          {this.props.movie.title}
        </div>
    );
  }
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

