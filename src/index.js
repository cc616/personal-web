import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'Styles/index.scss'
import { Provider } from 'mobx-react'
import stores from 'Stores'
import App from 'Routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
