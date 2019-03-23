import React from 'react';
import MovieEntry from './MovieListEntry.jsx'


function MovieList(props) {
  const movies = props.movies;
  return (
    <div>
      <ul>
        {movies.map((movie) =>
          <MovieEntry key={movie} movieItem={movie} />
        )}
      </ul >
    </div>
  );
};

export default MovieList;