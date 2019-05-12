import React from 'react'
import PropTypes from 'prop-types'

const Meme = ({ name }) => <h2>{name}</h2>

Meme.propTypes = {
  name: PropTypes.string.isRequired
}

export default Meme
