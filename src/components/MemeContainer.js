import React from 'react'
import Meme from './Meme'

class MemeContainer extends React.Component {
  constructor (props) {
    super(props)

    console.log('constructor')

    this.state = {
      name: 'name from state',
      c: 1
    }
  }

  componentDidMount () {
    console.log('mounted')
    this.setState({ name: 'name from componentDidMount' })
  }

  componentDidUpdate () {
    console.log('updated')
  }

  render () {
    const name = this.state.name
    return <Meme name={name} />
  }
}

export default MemeContainer
