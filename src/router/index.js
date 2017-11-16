import React from 'react'
import { Route, Router, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Login from 'Views/login'

const logined = false

const router = (
  <HashRouter>
    <div id='app'>
      <Route exact path='/' render={() => (
        logined ? (
          <Redirect to='/home' />
        ) : (
          <Login />
        )
      )}/>
      <Route path='/login' component={Login} />
    </div>
  </HashRouter>
)
export default router
