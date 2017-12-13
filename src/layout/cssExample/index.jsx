import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import BoxModel from 'Views/boxModel'
import LineaBg from 'Views/lineaBg'
import EqualModule from 'Views/equalModule'
import Nav from 'Components/nav'

class CssExample extends Component {
  render() {
    const navMenu = [{
      title: '盒子模型',
      path: '/cssExample/boxModel',
    }, {
      title: '线性背景',
      path: '/cssExample/lineaBg',
    }, {
      title: '平分模块',
      path: '/cssExample/equalModule',
    }]

    return (
      <div className='css-example-wrapper app-content'>
        <Nav navMenu={navMenu} />
        <div className='container'>
          <Route path='/cssExample/boxModel' component={BoxModel} />
          <Route path='/cssExample/lineaBg' component={LineaBg} />
          <Route path='/cssExample/equalModule' component={EqualModule} />
          <Route exact path='/cssExample' render={() => (
            <Redirect to='/cssExample/boxModel' />
          )} />
        </div>
      </div>
    )
  }
}

export default CssExample
