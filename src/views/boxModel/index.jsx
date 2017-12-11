import React, { Component } from 'react'

import './style.scss'

class BoxModel extends Component {
  render() {
    return (
      <div className='box-model-wrapper'>
        <div className='box-margin'>
          <div className='box-border'>
            <div className='box-padding'>
              <div className='box-content'>
                内容区域
              </div>
            </div>
          </div>
        </div>
        
        <div className='wavy-line-wrapper'>
        </div>
      </div>
    )
  }
}

export default BoxModel
