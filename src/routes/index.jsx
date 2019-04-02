import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from 'Stores'

import Login from 'Routes/login'
import Body from 'Routes/body'

import './style.scss'

const Routes = () => (
  <HashRouter>
    <div className='app-wrapper'>
      <Route exact path='/' render={() => <Redirect to='/home' /> } />
      <Switch>
        <Route path='/login' component={Login} />
        <Body />
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
