import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router'

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyD_m4zVMlAYwLEuiyVsT8l1zv-MhCT1mC0',
      authDomain: 'manager-567c3.firebaseapp.com',
      databaseURL: 'https://manager-567c3.firebaseio.com',
      projectId: 'manager-567c3',
      storageBucket: 'manager-567c3.appspot.com',
      messagingSenderId: '438035630645'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
