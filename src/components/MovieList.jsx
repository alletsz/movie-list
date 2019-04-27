import React from 'react';
import MovieEntry from './MovieListEntry.jsx'


function MovieList(props) {
  const movies = props.movies;
  return (
    <div>
      <span>
        {movies.map((movie) =>
          <MovieEntry key={movie} movieItem={movie} watched={props.watched} watchedList={props.watchedList} watchedMovies={props.watchedMovies} />
        )}
      </span >
    </div>
  );
};

export default MovieList;