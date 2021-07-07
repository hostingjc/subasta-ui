import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

//axios.defaults.baseURL = 'http://subastavozalta.herokuapp.com/api/';

axios.defaults.baseURL = 'http://subasta.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.post['Authorization'] = 'Bearer ' + localStorage.getItem('token');
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
