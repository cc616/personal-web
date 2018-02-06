import React, { Component } from 'react'
import './style.scss'

class EqualModule extends Component {
  render() {
    return (
      <div className='equal-module-wrapper'>
        <div className='title'>基于calc函数实现</div>
        <div className='calc-content clearfix'>
          <div className='item one'>1</div>
          <div className='item two'>2</div>
          <div className='item three'>3</div>
          <div className='item four'>4</div>
        </div>
        <div className='title'>基于flex弹性布局实现</div>
        <div className='flex-content'>
          <div className='item one'>1</div>
          <div className='item two'>2</div>
          <div className='item three'>3</div>
          <div className='item four'>4</div>
        </div>
      </div>
    )
  }
}

export default EqualModule
