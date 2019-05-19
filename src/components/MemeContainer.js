import React from 'react'
import Meme from './Meme'
import Title from './Title'
import Search from './Search'
import { getMemesByPopular, getMemesBySearch } from '../services/memes'

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

  handleSearch = async (search) => {
    const responseJson = await getMemesBySearch(search)
    this.setState({ memes: responseJson.result })
  }

  render () {
    const { isFetch, memes } = this.state

    if (isFetch) {
      return 'Loading...'
    }

    return (
      <>
        <Title>Meme App</Title>
        <Search handleSearch={this.handleSearch} />
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
      </>
    )
  }
}

export default MemeContainer
