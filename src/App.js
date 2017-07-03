import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
        apiKey: "AIzaSyC4Ony5PSx_RoH0kKlKLpgsiPY4AneGGk0",
        authDomain: "manager-80ef7.firebaseapp.com",
        databaseURL: "https://manager-80ef7.firebaseio.com",
        projectId: "manager-80ef7",
        storageBucket: "",
        messagingSenderId: "1098715531549"
  };
        firebase.initializeApp(config);
    }
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;