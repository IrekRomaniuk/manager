import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;