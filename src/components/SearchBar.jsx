import React from 'react';

const SearchBar = (props) => (
  <form>
    <input className="form" value={props.input} onChange={props.handleChange} />
    <button className="searchButton" onClick={props.onClick}>Go!</button>
  </form>
);

export default SearchBar;