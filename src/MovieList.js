import React from "react";
import Movies from "./Movies.js";
// import {movies} from "./example_data.js";
import style from "./styles/style.css"

class MovieList extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state= {searchInput:''},
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  
=======
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
        movies: this.state.movies.concat([{'title': movieToAdd}]),  
        currentMovie: '',   
      }
    );    
  }

  //helper function to get the movie to add from the input button
  handleNewMovieTitle(event) {    
    this.setState({currentMovie: event.target.value})
  }

  //handle search events
>>>>>>> develop
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
<<<<<<< HEAD
        </div>        
        <input 
          type="text" 
          name="Search" 
=======
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
        <input 
          type="text"           
          placeholder="Search..."
>>>>>>> develop
          value= {this.state.searchInput}          
          className={style.Search} 
          onChange={this.handleSearch}
        />
<<<<<<< HEAD
        <Movies movies = {movies.filter(movie => movie.title.includes(this.state.searchInput))}/>
=======
        <Movies movies={this.state.movies}/>
        {/* <Movies movies = {movies.filter(movie => movie.title.toLowerCase().includes(this.state.searchInput.toLowerCase()))}/> */}
>>>>>>> develop
      </div>      
    );
  } 
}

export default MovieList;