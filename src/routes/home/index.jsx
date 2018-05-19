import React, { Component } from 'react'
import { Button } from 'antd'
import _ from 'lodash'
import banner from 'Medias/home/banner_01.jpg'
import hoverPosition from 'Utils/hover'
import classnames from 'classnames'
import './style.scss'

const mockList = [{
  id: '1',
  url: banner,
}, {
  id: '2',
  url: banner,
}]

class Home extends Component {
  state = {
    position: '',
  }
  handleMouseEnter = (event, index) => {
    const $obj = document.getElementsByClassName('picture-wrapper')[index]
    const position = hoverPosition($obj, event)
    const POSITION = {
      TOP: 'top: -100%; left: 0',
      RIGHT: 'top: 0; left: 100%',
      BOTTOM: 'top: 100%; left: 0',
      LEFT: 'top: 0; left: -100%',
    }
    if (position) {
      const test = document.getElementsByClassName('picture-wrapper__info')[index]

      test.classList.remove('trans')
      test.style.cssText = POSITION[position]
      test.offsetWidth
      test.classList.add('trans')
      test.style.cssText = "top: 0; left: 0"
    }
  }
  handleMouseLeave = (event, index) => {
    const $obj = document.getElementsByClassName('picture-wrapper')[index]
    const position = hoverPosition($obj, event)
    const POSITION = {
      TOP: 'top: -100%; left: 0',
      RIGHT: 'top: 0; left: 100%',
      BOTTOM: 'top: 100%; left: 0',
      LEFT: 'top: 0; left: -100%',
    }
    if (position) {
      const test = document.getElementsByClassName('picture-wrapper__info')[index]
      test.style.cssText = POSITION[position]
    }
  }
  render() {
    const pictureHoverClass = classnames({
      'picture-wrapper__info': true,
    })

    const list = _.map(mockList, (picture, index) => (
      <div
        key={picture.id}
        className='picture-wrapper'
        onMouseEnter={e => this.handleMouseEnter(e, index)}
        onMouseLeave={e => this.handleMouseLeave(e, index)}
      >
        <img className='picture-wrapper__background' src={picture.url} />
        <div className={pictureHoverClass}>
          <div className='title'>春天</div>
          <div className='signature'>图片签名，一句话配图</div>
          <div className='tags'>图片标签</div>
          <div className='photographer'>摄影师</div>
        </div>
      </div>
    ))

    return (
      <div className='home-wrapper app-content'>
        <div className='banner-wrapper'>
          <img src={banner} />
        </div>
        <div className='picture-list'>
          {list}
        </div>
      </div>
    )
  }
}

export default Home
