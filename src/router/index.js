import React from 'react'
import { Route, Router, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Login from 'Views/login'
import Body from 'Views/body'
import Home from 'Views/home'
import CssExample from 'Views/cssExample'

const cookies = new Cookies()
const logined = () => cookies.get('token')

const router = (
  <HashRouter>
    <div id='app'>
      <Route exact path='/' render={() => (
        logined() ? (
          <Redirect to='/home' />
        ) : (
          <Redirect to='/login' />
        )
      )}/>
      <Route path='/login' component={Login} />
      <Body>
        <Route path='/home' component={Home} />
        <Route path='/cssExample' component={CssExample} />
      </Body>
    </div>
  </HashRouter>
)
export default router
