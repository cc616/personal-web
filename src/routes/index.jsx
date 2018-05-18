import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Login from 'Routes/login'
import Header from 'Components/header'
import Home from 'Routes/home'
import Body from 'Routes/body'
import CssExample from 'Routes/cssExample'
import CssTool from 'Routes/cssTool'
import Pinterest from 'Layouts/pinterest'

import PrivateRoute from './privateRoutes'

import './style.scss'

const withSubscription = WrappedComponent => (
  class extends Component {
    render() {
      return (
        <div>
          <Header />
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
)

const App = () => (
  <HashRouter>
    <div className='app-wrapper'>
      <Route exact path='/' render={() => <Redirect to='/home' /> } />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/home' component={withSubscription(Home)} />
        <Route path='/pinterest' component={Pinterest} />
        <PrivateRoute path='/cssExample' component={withSubscription(CssExample)} />
        <PrivateRoute path='/cssTool' component={withSubscription(CssTool)} />
      </Switch>
    </div>
  </HashRouter>
)
export default App
