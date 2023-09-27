import React from 'react'

const SearchBar = ({ filterSearch }) => {

    // const handleInputSearch = (e) => {
    //     filterSearch(e.target.value);
    // }

  return (
    <nav className="container my-5">
      <h2 className="text-center">Search Beer</h2>
      <form className="container-fluid">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="search-beer"
            aria-describedby="basic-addon1"
            onChange={(e) => {filterSearch(e.target.value)}}
            // onChange={handleInputSearch}
          />
        </div>
      </form>
    </nav>
  )
}

export default SearchBar