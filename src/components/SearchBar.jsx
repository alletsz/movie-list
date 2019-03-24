import React from 'react';

const SearchBar = (props) => (
  <form>
    <input className="form" placeholder="search movie list" value={props.input} onChange={props.handleChange} />
    <button className="searchButton" onClick={props.onClick}>Go!</button>
  </form>
);

export default SearchBar;