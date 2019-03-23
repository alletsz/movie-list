import React from 'react';

const SearchBar = (props) => (
  <div>
    <input className="form" value={props.input}></input>
    <button className="searchButton">Search</button>
  </div>
);

export default SearchBar;