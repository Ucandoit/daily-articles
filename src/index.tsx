import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components';
import { Firebase, FirebaseContext } from './firebase';

ReactDom.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('app')
);
