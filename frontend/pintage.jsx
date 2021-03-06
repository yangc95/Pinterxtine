import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store/store';
import Root from './components/root';
// import { logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: {
        // currentUser: window.currentUser.id
        id: window.currentUser.id
      }
    };
    store = createStore(preloadedState);
    delete window.currentUser;
  } else {
    store = createStore();
  }

  // TEST START
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // window.logout = logout;
  // ReactDOM.render(<h1>Hi</h1>, root);
  // TEST END
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});