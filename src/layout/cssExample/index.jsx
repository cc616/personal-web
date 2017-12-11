import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import BoxModel from 'Views/boxModel'
import LineaBg from 'Views/lineaBg'
import Nav from 'Components/nav'

import './style.scss'

class CssExample extends Component {
  render() {
    const navMenu = [{
      title: '盒子模型',
      path: '/cssExample/boxModel',
    }, {
      title: '线性背景',
      path: '/cssExample/lineaBg',
    }]

    return (
      <div className='css-example-wrapper app-content'>
        <Nav navMenu={navMenu} />
        <div className='container'>
          <Route path='/cssExample/boxModel' component={BoxModel} />
          <Route path='/cssExample/lineaBg' component={LineaBg} />
          <Route exact path='/cssExample' render={() => (
            <Redirect to='/cssExample/boxModel' />
          )} />
        </div>
      </div>
    )
  }
}

export default CssExample
