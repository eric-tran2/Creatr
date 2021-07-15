import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', ()=> {
  let root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  // let store = configureStore();
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     sessions: {
  //       currentuser: window.currentUser
  //     }
  //   };
  //   store = configureStore(preloadedState)
  // }
  // // ReactDOM.render(<h1>Welcome to Creatr</h1>, root);
  ReactDOM.render(<Root store={store}/>, root);
})

