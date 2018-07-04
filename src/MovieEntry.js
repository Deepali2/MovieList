import React from "react";
import PropTypes from 'prop-types';


class MovieEntry extends React.Component {
  render() {
    return (
      <h3>{this.props.movie.title}</h3>
    );
  }
}

MovieEntry.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
};

export default MovieEntry;