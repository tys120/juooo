<<<<<<< HEAD
=======
// import React from 'react';
>>>>>>> 6031720b5705c33d2378ea75dfcf283ee9d6863e
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css'
import './index.css';
// import App from './App';
import Router from "./Router"
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(Router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
