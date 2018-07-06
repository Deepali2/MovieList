import React from "react";
import MovieEntry from "./MovieEntry.js";
import style from "./styles/style.css"


var Movies = (props) => {  
  return (
    <div>      
        <div className={style.movies}>
          {props.movies.map((movie, index) => <MovieEntry movie={movie} key={`${movie}${index}`}/>)}
      </div>  
    </div>    
  );
}

export default Movies;
