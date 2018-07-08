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

  //helper function to set the watchstatus based on a boolean value
  watchStatus(boolean) {
    if (boolean === true) {      
      return WATCHED_TEXT;   
    } else {      
      return NOT_WATCHED_TEXT;
    }
  }
  
  //function to add a movie 
  addMovie() {  
    let movieToAdd = this.state.currentMovie; 
    
    this.setState(
      {
        movies: this.state.movies.concat([{ 'title': movieToAdd, 'watchStatus': watchStatus(false)}]),  
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

  //function to toggle the watchStatus of a movie when button for a movie entry is clicked

  toggle_watchStatus() {
    if (this.movies.movie.watchStatus === NOT_WATCHED_TEXT) { let boolean = false; }
    else let boolean = true;
    return this.watchStatus(!boolean);     
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
        <button className={style.watchedbtn}>{this.WATCHED_TEXT}</button>      
        <button className={style.toWatchbtn}>{this.NOT_WATCHED_TEXT }</button>          
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