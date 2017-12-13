import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'

class LineaBg extends Component {
  render() {
    return (
      <div className='linea-background-wrapper'>
        <div className='item'>
          <div className='title'>一个盒子实现</div>
          <div className='one'></div>
        </div>
        <div className='item'>
          <div className='title'>两个盒子实现，基于IE9</div>
          <div className='two cleafix'>
            <div className='two-left'></div>
            <div className='two-right'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default LineaBg
