import {Component} from 'react'

import Header from '../Header'

import HomeContainer from './styledComponent'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    )
  }
}

export default Home
