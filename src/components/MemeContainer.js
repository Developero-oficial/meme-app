import React from 'react'
import Meme from './Meme'
import { getMemesByPopular } from '../services/memes'

class MemeContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      memes: [],
      isFetch: true,
    }
  }

  async componentDidMount () {
    const responseJson = await getMemesByPopular()
    this.setState({ memes: responseJson.result, isFetch: false })
  }

  render () {
    const { isFetch, memes } = this.state

    if (isFetch) {
      return 'Loading...'
    }

    return (
      <section className="memes-container">
        {
          memes.map((meme) => <Meme
            imageUrl={meme.imageUrl}
            name={meme.displayName}
            key={meme.generatorID}
            ranking={meme.ranking}
            totalVotesScore={meme.totalVotesScore}
          />)
        }
      </section>
    )
  }
}

export default MemeContainer
