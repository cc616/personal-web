import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import Header from 'Components/header'

class Body extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
  }

  render() {
    const { children } = this.props

    return (
      <div className='body-wrap'>
        <Header />
        {children}
      </div>
    )
  }
}

export default Body
