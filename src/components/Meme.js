import React from 'react'
import PropTypes from 'prop-types'

const Meme = ({
  name,
  imageUrl,
  ranking,
  totalVotesScore
}) => (
  <div className="single-meme">
    <h2>{name}</h2>
    <img src={imageUrl} alt={name} />
    <p>ranking: {ranking}</p>
    <p>Total score: {totalVotesScore}</p>
  </div>
)

Meme.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired,
  totalVotesScore: PropTypes.number.isRequired,
}

export default Meme
