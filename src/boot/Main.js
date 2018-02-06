/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from '../PeopleList';
import Setup from "./setup";
import { StyleProvider } from "native-base";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
//import { StyleProvider } from "native-base";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Main extends React.Component {
  state = { loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyDgl6LwUyrB0DvNI5r3MN28abbs0do40uU",
          authDomain: "schoolappdemo-f55ce.firebaseapp.com",
          databaseURL: "https://schoolappdemo-f55ce.firebaseio.com",
          projectId: "schoolappdemo-f55ce",
          storageBucket: "schoolappdemo-f55ce.appspot.com",
          messagingSenderId: "564050364428"
        });

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false});
          }
        });
    }

    renderInitialView() {
      switch (this.state.loggedIn) {
        case true:
          return <PeopleList />
        case false:
          return <Login />;
        default:
          return <Loader size="large" />;
      }
    }
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
      </StyleProvider>
    );
  }
}
