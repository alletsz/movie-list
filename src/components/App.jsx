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
      searchValue: '',
      addMovieValue: '',
      // userSubmittedMovies: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
    this.handleSubmitMovie = this.handleSubmitMovie.bind(this)
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
      addMovieValue: event.target.value
    });

  }

  handleSubmitMovie() {
    event.preventDefault();
    movies.push({ title: this.state.addMovieValue })
    this.setState({
      movieList: movies
    })
  }

  render() {

    return (
      <div>
        <AddMovies addMovie={this.handleAddMovie} addSubmit={this.handleSubmitMovie} />

        <SearchBar input={this.state.searchValue} handleChange={this.handleChange} onClick={this.handleSubmit} />

        <MovieList movies={this.state.movieList} />
      </div>
    );
  }
}

export default App;