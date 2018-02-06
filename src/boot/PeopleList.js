/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Setup from "../src/boot/setup";

const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    container: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },
});




export default class PeopleList extends Component {

  state = {
    loading: false,
};

  renderLoader() {
          return <Setup size="large"/>;
   //else {
      //  return <LoginButton onPress={this.onButtonPress.bind(this)} />
    //}
  }

  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles
    return (
      <View style={form}>
          <Text>Login or create an account</Text>
             <View>
              <Text>I see people!!!!</Text>
            </View>
            <View style={loginButtonArea}>
               {this.renderLoader()}
            </View>
      </View>
    );
  }
}
*/
 
 
import React from "react";
//import React, { Component } from 'react';
import Setup from "./setup";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { StyleProvider } from "native-base";


export default class PeopleList extends React.Component {
  render() {
    return <Setup />;
  }
}


/** 
  
import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "./src/App";
import getTheme from "./src/theme/components";
import variables from "./src/theme/variables/commonColor";

export default class PeopleList extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}

*/


//import { AppRegistry } from 'react-native';
//import App from './App';
//import Setup from "./src/boot/setup";

//AppRegistry.registerComponent('template', () => Setup);
