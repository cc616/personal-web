import React, { Component } from 'react'
import Header from 'Components/header'

import './style.scss'

const BasicLayout = WrappedComponent => (
  class extends Component {
    render() {
      return (
        <div className='basic-layout-wrapper'>
          <Header />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
)

export default BasicLayout
