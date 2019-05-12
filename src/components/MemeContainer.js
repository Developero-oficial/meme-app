import React from 'react'
import Meme from './Meme'

class MemeContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      memes: [],
      isFetch: true,
    }
  }

  componentDidMount () {
    fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo')
      .then(response => response.json())
      .then(memesJson => this.setState({ memes: memesJson.result, isFetch: false }))
  }

  render () {
    const { isFetch, memes } = this.state

    if (isFetch) {
      return 'Loading...'
    }

    return (
      memes.map((meme) => <Meme name={meme.displayName} key={meme.generatorID} />)
    )
  }
}

export default MemeContainer
