import React from 'react';
import movies from '../data/exampledata.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovies from './AddMovies.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: movies,
      copy: [],
      watchedList: [],
      searchValue: '',
      addMovieValue: '',
      watched: false,
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
    this.handleSubmitMovie = this.handleSubmitMovie.bind(this)
    // this.handleToggleMovie = this.handleToggleMovie.bind(this)
    this.handleWatched = this.handleWatched.bind(this)

    this.handleWatchedMovies = this.handleWatchedMovies.bind(this)
    this.handleNeedWatch = this.handleNeedWatch.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.search(movies)
  }

  search() {
    let displayFilteredMovies = this.state.movieList.filter((movie) => {
      if (movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
        return movie.title;
      }
    });
    if (displayFilteredMovies.length > 0) {
      this.setState({
        movieList: displayFilteredMovies
      });
    } else {
      alert('No movie found');
    }
  }

  handleAddMovie(event) {
    this.setState({
      addMovieValue: event.target.value,

    });

  }

  handleSubmitMovie() {
    event.preventDefault();
    movies.push({ title: this.state.addMovieValue, watched: false })
    this.setState({
      movieList: movies,
      // watched: false,
    })
    console.log(this.state.movieList)
  }



  // updating the state of a movie
  handleWatchedMovies(movie) {
    let watchedList = this.state.watchedList
    movie.watched = !movie.watched
    // if (movie.watched) {
    //   watchedList.push(movie)
    // } else {
    //   watchedList = watchedList.filter((item) => item !== movie)
    // }
    this.setState({
      // watchedList: watchedList,
      movieList: this.state.movieList
      // Spread operators for Array
      // watchedList: [...this.state,watchedList, movie]
    })
  }
  // Filtering
  handleWatched() {
    event.preventDefault();
    // alert('watch button works')
    this.setState({
      // copy: this.state.movieList,
      // movieList: this.state.watchedList,
      watched: true
    });
  }

  handleNeedWatch() {
    event.preventDefault();
    this.setState({
      watched: false
    })
  }
  render() {
    const movies = this.state.movieList.filter((movie) => movie.watched === this.state.watched)
    return (
      <div>
        <AddMovies addMovie={this.handleAddMovie} addSubmit={this.handleSubmitMovie} />

        <SearchBar input={this.state.searchValue} handleChange={this.handleChange} watched={this.state.watched} onClick={this.handleSubmit} onWatch={this.handleWatched} onUnwatch={this.handleNeedWatch} watched={this.state.watched} />

        <MovieList movies={movies} watched={this.state.watched} watchedList={this.state.watchedList} watchedMovies={this.handleWatchedMovies} />
      </div>
    );
  }
}

export default App;


// regular function will bind for example action to the click and will not have access to the instances setState and methods
// arrow functions have no context and are bound to the instance of the component