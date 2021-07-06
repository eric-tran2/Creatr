import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', ()=> {
  let root = document.getElementById('root');
  let store = configureStore();
  // ReactDOM.render(<h1>Welcome to Creatr</h1>, root);
  ReactDOM.render(<Root store={store}/>, root);
})

