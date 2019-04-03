import React, { Component } from 'react'
import _ from 'lodash'
import hoverPosition from 'Utils/hover'
import classnames from 'classnames'

import './style.scss'

const mockList = []

for (let i = 10; i < 20; i++) {
  mockList.push({
    url: `http://cued.xunlei.com/demos/publ/img/P_0${i}.jpg`,
    id: i,
  })
}

class SpecialHover extends Component {
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
      <div className='special-hover-wrapper'>
        {list}
      </div>
    )
  }
}

export default SpecialHover
