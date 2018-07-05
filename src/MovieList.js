import React from "react";
import Movies from "./Movies.js";
import {movies} from "./example_data.js";
import style from "./styles/style.css"

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchInput:'',
      newMovie:'',
   },    
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  addMovieTitle(newMovie) {

  }
  
  handleSearch(event) {    
    this.setState({searchInput: event.target.value})
  }
  
  render() {
    return (
      <div>
        <div className={style.MovieListTitle}>
          <h1>Movie List</h1>
        </div>
        <div className={style.BlankSpace}>
        <div>
          {/* <input 
            type="text"
            name="Add_Movie_Title"
            value={}
            className={}
            onChange={}
          /> */}
        </div>
        </div>        
        <input 
          type="text" 
          name="Search" 
          value= {this.state.searchInput}          
          className={style.Search} 
          onChange={this.handleSearch}
        />
        <Movies movies = {movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))}/>
      </div>      
    );
  } 
}

export default MovieList;