import React from 'react';


function MovieList = (props) => {
  // const movies = props.movies;
  return (
    <ul>
      <li>{props.movies[0].title}</li>
      <li>{props.movies[1].title}</li>
      <li>{props.movies[2].title}</li>
      <li>{props.movies[3].title}</li>
      <li>{props.movies[4].title}</li>
    </ul>
    </div >
  )
};

export default MovieList;