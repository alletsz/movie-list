import React from 'react'

class MovieEntry extends React.Component {
  render() {
    return (
      <div className="movieEntryContainer">
        <span>{this.props.movieItem.title}
          <button onClick={() => {

            this.props.watchedMovies(this.props.movieItem)
          }} >

            {this.props.movieItem.watched ? 'Not Watched' : 'Watched'}

          </button>
        </span>
      </div>
    );
  }
};

export default MovieEntry;