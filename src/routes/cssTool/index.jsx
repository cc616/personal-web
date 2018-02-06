import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import FontSetting from 'Routes/fontSetting'
import Nav from 'Components/nav'

class CssTool extends Component {
  render() {
    const navMenu = [{
      title: '字体设置',
      path: '/cssTool/fontSetting',
    }]

    return (
      <div className='css-tool-wrapper app-content'>
        <Nav navMenu={navMenu} />
        <div className='container'>
          <Route path='/cssTool/fontSetting' component={FontSetting} />
          <Route exact path='/cssTool' render={() => (
            <Redirect to='/cssTool/fontSetting' />
          )} />
        </div>
      </div>
    )
  }
}

export default CssTool
