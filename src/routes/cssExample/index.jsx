import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import BoxModel from 'Routes/boxModel'
import LineaBg from 'Routes/lineaBg'
import EqualModule from 'Routes/equalModule'
import Nav from 'Components/nav'
import Pinterest from 'Layouts/pinterest'
import SpecialHover from 'Layouts/specialHover'

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
    }, {
      title: '鼠标hover',
      path: '/cssExample/specialHover',
    }, {
      title: '流式布局',
      path: '/cssExample/pinterest',
    }]

    return (
      <div className='css-example-wrapper app-content'>
        <Nav navMenu={navMenu} />
        <div className='container'>
          <Route path='/cssExample/boxModel' component={BoxModel} />
          <Route path='/cssExample/lineaBg' component={LineaBg} />
          <Route path='/cssExample/equalModule' component={EqualModule} />
          <Route path='/cssExample/pinterest' component={Pinterest} />
          <Route path='/cssExample/specialHover' component={SpecialHover} />
          <Route exact path='/cssExample' render={() => (
            <Redirect to='/cssExample/boxModel' />
          )} />
        </div>
      </div>
    )
  }
}

export default CssExample
