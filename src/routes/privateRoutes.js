import React from 'react'
import { Route, Redirect } from 'react-router'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    cookie.get('isAuthenticated') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute
