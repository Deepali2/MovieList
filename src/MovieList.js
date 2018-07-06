import React from "react";
import Movies from "./Movies.js";
// import {movies} from "./example_data.js";
import style from "./styles/style.css";
import { WATCHED_TEXT, NOT_WATCHED_TEXT } from "./MovieConstants.js";


class MovieList extends React.Component {
  constructor(props) {
    super(props);    
    this.state= {
      searchInput:'',
      movies: [],  
      currentMovie: '',  
   },    
    this.addMovie = this.addMovie.bind(this);
    this.handleSearch = this.handleSearch.bind(this); 
    this.handleNewMovieTitle = this.handleNewMovieTitle.bind(this);  
  }
  
  //function to add a movie 
  addMovie() {  
    let movieToAdd = this.state.currentMovie; 
    
    this.setState(
      {
        movies: this.state.movies.concat([{ 'title': movieToAdd, 'watchStatus': NOT_WATCHED_TEXT}]),  
        currentMovie: '',   
      }
    );    
  }

  //helper function to get the movie to add from the input button
  handleNewMovieTitle(event) {    
    this.setState({currentMovie: event.target.value})
  }

  //handle search events
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
          <input 
            type="text"
            placeholder="Add Movie Title Here..."     
            className={style.addMovie} 
            value={this.state.currentMovie}
            onChange={this.handleNewMovieTitle} 
                              
          />            
          <button className={style.addbtn} onClick={this.addMovie}>Add</button>
        </div>
        </div>  
        <button className={style.watchedbtn}>Watched</button>      
        <button className={style.toWatchbtn}>To Watch</button>          
        <input 
          type="text"           
          placeholder="Search..."
          value= {this.state.searchInput}          
          className={style.Search} 
          onChange={this.handleSearch}
        />
        {/* <Movies movies={this.state.movies}/> */}
        <Movies 
          movies = {this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))}
         
          />
      </div>      
    );
  } 
}

export default MovieList;