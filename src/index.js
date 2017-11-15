import React from 'react';
import ReactDOM from 'react-dom';
import 'Styles/index.scss';
import App from 'Views/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
