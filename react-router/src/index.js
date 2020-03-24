import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BasicExample from './Component/BasicExample';
import ParamsExample from './Component/ParamsExample';
import NestingExmple from './Component/NestingExmple';
import AuthExample from './Component/AuthExample';
import Tugas from './Component/Tugas';

ReactDOM.render(<AuthExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
