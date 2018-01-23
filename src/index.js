import React from 'react'
import ReactDOM from 'react-dom'
import 'Styles/index.scss'
import { Provider } from 'mobx-react'
import store from 'Stores'
import App from 'Routes/app'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
