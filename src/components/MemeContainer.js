import React from 'react'
import Meme from './Meme'
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

    return (
      <>
        <Search handleSearch={this.handleSearch} />

        {
          isFetch && 'Loading...'
        }

        {
          (!isFetch && !memes.length) && 'No memes founded u.u try another search'
        }

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
