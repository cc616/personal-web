import React, { Component } from 'react'
import { Button } from 'antd'
import './style.scss'

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type='primary'>Button</Button>
      </div>
    )
  }
}

export default Home
