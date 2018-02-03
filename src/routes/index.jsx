import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Login from 'Routes/login'
import Header from 'Components/header'
import Home from 'Routes/home'
import CssExample from 'Routes/cssExample'
import CssTool from 'Routes/cssTool'

import PrivateRoute from './privateRoutes'

import './style.scss'

const tt = (component) => (
  <div>
    
    <Header />
    {component}
  </div>
)

const App = () => (
  <HashRouter>
    <div className='app-wrapper'>
      <Route exact path='/' render={() => <Redirect to='/home' /> } />
      <Route exact path='/home' component={(Home)} />
      <PrivateRoute exact path='/cssExample' component={tt(CssExample)} />
      <PrivateRoute exact path='/cssTool' component={CssTool} />
      <Route exact path='/login' component={Login} />
    </div>
  </HashRouter>
)
export default App
