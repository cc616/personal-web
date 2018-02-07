import React from 'react'
import { Route, Redirect } from 'react-router'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const isAuthenticated = () => cookie.get('token') === 'isAuthenticated'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
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
