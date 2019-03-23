import React from 'react';
import movies from '../data/exampledata.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: movies,
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    event.preventDefault();
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

  render() {

    return (
      <div>
        <SearchBar input={this.state.searchValue} handleChange={this.handleChange} onClick={this.handleSubmit} />
        <MovieList movies={this.state.movieList} />
      </div>
    );
  }
}

export default App;