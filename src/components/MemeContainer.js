import React from 'react'
import Meme from './Meme'

class MemeContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'name from state',
      c: 1
    }
  }

  render () {
    const name = this.state.name
    return <Meme name={name} />
  }
}

export default MemeContainer
