import React from 'react'

const MovieEntry = (props) => {
  return (
    <li>{props.movieItem.title}</li>
  );
}

export default MovieEntry;