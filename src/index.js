import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './indexResponsive.css';
import './css/projects.css'
import './css/projectsResponsive.css'
import './../src/css/normalize.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
