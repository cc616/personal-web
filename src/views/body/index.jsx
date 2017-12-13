import React, { Component } from 'react'
import { Route } from 'react-router'
import Header from 'Components/header'
import Home from 'Views/home'
import CssExample from 'Layout/cssExample'
import CssTool from 'Layout/cssTool'

import './style.scss'

class Body extends Component {

  render() {

    return (
      <div className='body-wrapper'>
        <Header />
        <Route path='/home' component={Home} />
        <Route path='/cssExample' component={CssExample} />
        <Route path='/cssTool' component={CssTool} />
      </div>
    )
  }
}

export default Body
