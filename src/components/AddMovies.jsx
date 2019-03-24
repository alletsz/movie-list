import React from 'react';

const AddMovies = (props) => {
  return (
    <form onSubmit={props.addSubmit}>
      <input className="addMovie" placeholder="Add Movie title here..." onChange={props.addMovie} />
      <button className="addMovieButton" type="submit">Add Movie</button>
    </form>
  )
}


export default AddMovies;