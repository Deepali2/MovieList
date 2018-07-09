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
      viewStatus:'all',
     
   },    
    this.addMovie = this.addMovie.bind(this);
    this.handleSearch = this.handleSearch.bind(this); 
    this.handleNewMovieTitle = this.handleNewMovieTitle.bind(this);  
    this.watchedClickHandler = this.watchedClickHandler.bind(this);
    this.handleShowMovies = this.handleShowMovies.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
  }


  
  //function to add a movie 
  addMovie() {  
    let movieToAdd = this.state.currentMovie; 
    
    this.setState(
      {
        movies: this.state.movies.concat([{ 'title': movieToAdd, 'watchStatus': false}]),  
        currentMovie: '',   
      }
    );    
  }

  //helper function to get the movie to add from the input button
  handleNewMovieTitle(event) {    
    this.setState({currentMovie: event.target.value});
  }

  //handle search events
  handleSearch(event) {    
    this.setState({searchInput: event.target.value});
  }

  //function to toggle the watchStatus of a movie when button for a movie entry is clicked
  watchedClickHandler(index) { 
    return () =>
      this.setState((prevState) => {
        let newMovies = prevState.movies;// getting the previous list of movies
        newMovies[index].watchStatus = !newMovies[index].watchStatus;//changing watch status on appropriate movie
        return ({movies: newMovies});// changing movies in state to be the new movies with the change
      });
  } 

  //function to control the radio buttons
  handleShowMovies(event) {
    this.setState({
      viewStatus: event.target.value
    });
  }
  
  filterSearch() {
    let searchResults = this.state.movies
      .filter(movie => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    switch(this.state.viewStatus) {
      case "watched":
        searchResults = searchResults.filter(movie => movie.watchStatus);
        break;
      case "unwatched":
        searchResults = searchResults.filter(movie => !movie.watchStatus);
        break;    
    }

    //USING IF STATEMENTS: IT WORKS
    // if (this.state.viewStatus === "watched") {
    //   searchResults = searchResults.filter(movie => movie.watchStatus);
    // }
    // if (this.state.viewStatus === "unwatched") {
    //   searchResults = searchResults.filter(movie => !movie.watchStatus);
    // }
    return searchResults;
      
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

          <input type="radio" value="all" checked={this.state.viewStatus==="all"} onChange={this.handleShowMovies}/> All Movies
          <input type="radio" value="watched" checked={this.state.viewStatus==="watched"} onChange={this.handleShowMovies}/> {WATCHED_TEXT}
          <input type="radio" value="unwatched" checked={this.state.viewStatus==="unwatched"} onChange={this.handleShowMovies}/> {NOT_WATCHED_TEXT}             
        <input 
          type="text"           
          placeholder="Search..."
          value= {this.state.searchInput}          
          className={style.Search} 
          onChange={this.handleSearch}
        />
        {/* <Movies movies={this.state.movies}/> */}
        <Movies 
          movies={this.filterSearch()}
          watchedClickHandler = {this.watchedClickHandler}
          />
      </div>      
    );
  } 
}

export default MovieList;