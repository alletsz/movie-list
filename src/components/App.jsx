import React from 'react';
import movies from '../data/exampledata.js'
import MovieList from './MovieList.jsx'
import SearchBar from './SearchBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      input: '',
      search: '',
    };

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)

  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      search: ''
    });
  }

  submit() {
    this.setState({
      search: this.state.input
    });
  }

  render() {

    return (
      <div>
        <SearchBar onChange={this.handleChange} onClick={this.submit} />
        <MovieList />
      </div>
    );
  }
}

export default App;