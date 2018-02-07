import React, { Component } from 'react'
import { Route } from 'react-router'
import Header from 'Components/header'
import Home from 'Routes/home'
import CssExample from 'Routes/cssExample'
import CssTool from 'Routes/cssTool'
import PrivateRoute from 'Routes/privateRoutes'

import './style.scss'

class Body extends Component {

  render() {

    return (
      <div className='body-wrapper'>
        <Header />
        <PrivateRoute path='/cssExample' component={CssExample} />
        <PrivateRoute path='/cssTool' component={CssTool} />
      </div>
    )
  }
}

export default Body
