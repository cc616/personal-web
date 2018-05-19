import React, { Component } from 'react'
import _ from 'lodash'

import './style.scss'

const mockData = []

for (let i = 10; i < 30; i++) {
  mockData.push({
    url: `http://cued.xunlei.com/demos/publ/img/P_0${i}.jpg`,
    id: i,
  })
}

class Pinterest extends Component {
  render() {
    const column1 = _.filter(mockData, (item, index) => index % 5 === 0)
    const column2 = _.filter(mockData, (item, index) => (index - 1) % 5 === 0)
    const column3 = _.filter(mockData, (item, index) => (index - 2) % 5 === 0)
    const column4 = _.filter(mockData, (item, index) => (index - 3) % 5 === 0)
    const column5 = _.filter(mockData, (item, index) => (index - 4) % 5 === 0)
    const list1 = _.map(column1, item => (
      <div className='item' key={item.id}>
        <img src={item.url} />
        <div>{item.id}</div>
      </div>
    ))
    const list2 = _.map(column2, item => (
      <div className='item' key={item.id}>
        <img src={item.url} />
        <div>{item.id}</div>
      </div>
    ))
    const list3 = _.map(column3, item => (
      <div className='item' key={item.id}>
        <img src={item.url} />
        <div>{item.id}</div>
      </div>
    ))
    const list4 = _.map(column4, item => (
      <div className='item' key={item.id}>
        <img src={item.url} />
        <div>{item.id}</div>
      </div>
    ))
    const list5 = _.map(column5, item => (
      <div className='item' key={item.id}>
        <img src={item.url} />
        <div>{item.id}</div>
      </div>
    ))

    return (
      <div className='pinterest-wrapper'>
        <div className='container'>
          <div className='column'>
            {list1}
          </div>
          <div className='column'>
            {list2}
          </div>
          <div className='column'>
            {list3}
          </div>
          <div className='column'>
            {list4}
          </div>
          <div className='column'>
            {list5}
          </div>
        </div>
      </div>
    )
  }
}

export default Pinterest
