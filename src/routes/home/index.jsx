import React, { Component } from 'react'
import Header from './header'

import './style.scss'

class Home extends Component {
  render() {

    return (
      <div className='home-wrapper'>
        <Header />
        <div className='picture-list'>
          react
        </div>
      </div>
    )
  }
}

export default Home
