import React, { Component } from 'react'
import { Button } from 'antd'
import banner from 'Medias/home/banner_01.jpg'
import './style.scss'

class Home extends Component {
  render() {
    return (
      <div className='home-wrapper app-content'>
        <h1>wellcome to react</h1>
        <div className='banner-wrapper'>
          <img src={banner} />
        </div>
        <div className='picture-wrapper'>
          <img className='picture-wrapper__background' src={banner} />
          <div className='picture-wrapper__info'>
            <div className='title'>春天</div>
            <div className='signature'>图片签名，一句话配图</div>
            <div className='tags'>图片标签</div>
            <div className='photographer'>摄影师</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
