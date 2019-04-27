import React from 'react';

const SearchBar = (props) => (
  <form>
    <button className="watchedButton" disabled={props.watched} onClick={props.onWatch}>Watched</button>
    <button className="notWatchedButton" disabled={!props.watched} onClick={props.onUnwatch}>Need to Watch</button>
    <input className="form" placeholder="search movie list" value={props.input} onChange={props.handleChange} />
    <button className="searchButton" onClick={props.onClick}>Go!</button>
  </form>
);

export default SearchBar;