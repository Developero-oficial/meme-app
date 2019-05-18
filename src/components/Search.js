import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
  render () {
    const { handleSearch } = this.props

    return (
      <div className="search-container">
        <input className="search-input" type="text" />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
