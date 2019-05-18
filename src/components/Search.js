import React from 'react'

class Search extends React.Component {
  render () {
    return (
      <div className="search-container">
        <input className="search-input" type="text" />
        <button className="search-btn">Search</button>
      </div>
    )
  }
}

export default Search
