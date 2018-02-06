import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/index.scss'
import { Provider } from 'mobx-react'
import stores from 'Stores'
import Route from 'Routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider {...stores}>
    <Route />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
