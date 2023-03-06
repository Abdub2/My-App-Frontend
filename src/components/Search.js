import React, { useState } from "react";

function Search({ onSearch }) {

  const [query, setQuery] = useState('');

  function handleQuery(e) {
    e.preventDefault()

    onSearch(query)
  }

  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" value={query} onChange={ e => setQuery(e.target.value)}></input>
      <button className="btn btn-outline-success" type="submit" onClick={e => handleQuery(e)}>Search</button>
    </form>
  );
}

export default Search;