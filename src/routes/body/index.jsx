import React, { Component } from 'react'
import Header from 'Components/header'
import CssExample from 'Routes/cssExample'
import CssTool from 'Routes/cssTool'
import PrivateRoute from 'Components/privateRoute'

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
