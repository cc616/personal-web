import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from 'Stores'

import BasicLayout from 'Layouts/basicLayout'
import Pinterest from 'Layouts/pinterest'
import SpecialHover from 'Layouts/specialHover'

import PrivateRoute from 'Components/privateRoute'

import Login from 'Routes/login'
import Home from 'Routes/home'
import Body from 'Routes/body'
import CssExample from 'Routes/cssExample'
import CssTool from 'Routes/cssTool'

import './style.scss'

const Routes = () => (
  <HashRouter>
    <div className='app-wrapper'>
      <Route exact path='/' render={() => <Redirect to='/home' /> } />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/pinterest' component={Pinterest} />
        <Route path='/specialHover' component={SpecialHover} />
        <PrivateRoute path='/cssExample' component={BasicLayout(CssExample)} />
        <PrivateRoute path='/cssTool' component={BasicLayout(CssTool)} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Provider {...stores}>
    <Routes />
  </Provider>
)

export default App
