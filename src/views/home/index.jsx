import React, { Component } from 'react'
import { Button } from 'antd'
import './style.scss'

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper'>
        <div className='input'>
          <input type='text' />
        </div>
        <div className='test-width clearfix'>
          <div className='item one'>1</div>
          <div className='item two'>2</div>
          <div className='item three'>3</div>
          <div className='item four'>4</div>
        </div>
      </div>
    )
  }
}

export default Home
