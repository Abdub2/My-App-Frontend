import React, { useState } from "react";

function Search({ onSearch }) {

  const [query, setQuery] = useState('');

  function handleQuery(e) {
    e.preventDefault()

    onSearch(query)
  }

  return (
    <nav className="navbar bg-body-tertiary">
      <form className="d-flex " role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={query} onChange={ e => setQuery(e.target.value)}></input>
        <button className="btn btn-outline-success" type="submit"onClick={e => handleQuery(e)}>Search</button>
      </form>


    </nav>
  );
}

export default Search;