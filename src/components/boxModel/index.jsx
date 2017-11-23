import React, { Component } from 'react'
import './style.scss'

class BoxModel extends Component {
  render() {
    return (
      <div className='box-model-wrap'>
        <div className='box-margin'>
          <div className='box-border'>
            <div className='box-padding'>
              <div className='box-content'>
                内容区域
              </div>
            </div>
          </div>
        </div>
        <div className='linear-background-wrapper'>
          线性背景
        </div>
      </div>
    )
  }
}

export default BoxModel
