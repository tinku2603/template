/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import Loader from './Loader';
//import App from './js/App';
import firebase from 'firebase';
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { StyleProvider,Container,Content } from "native-base";


const LoginButton = MKButton.coloredButton()
    .withText('LOGIN')
    .build();

const styles = StyleSheet.create({
    form: {
        paddingBottom: 10,
        width: 200,
        //alignItems:'center',
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

export default class Login extends Component {
  state = {
      email: '',
      password: '',
      error: '',
      loading: false,
  };

     onButtonPress() {
      const { email, password } = this.state;
      this.setState({error: '', loading: true});
      fetch('http://192.168.1.6:15100/api/students/view?id=all', {  
       // method: 'POST',
        method: 'GET', 
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'auth_token':'0d3ab785154d22f6d3f721d7839dd4363e0aeaf65034f319ff4d78f6a1197bfc',
        }
        // body: JSON.stringify({
        //    username: email,
        //    plain_text_password: password,
        //}),
    }).then((res)=>{
                    console.log("Is OK? ", res.ok);
                    console.log("Status Code: ", res.status);
                    return res.json();      // or `res.text();` 
                 }).then((obj)=>{
                                console.log("Response object is: ", obj);
                                });
                   //.then(this.onAuthSuccess.bind(this))
                   //.catch(this.onAuthFailed.bind(this));
/*
fetch('http://192.168.1.6:15100/api/students/view?id=all'),  {
    method:'GET',
    headers:{
        'auth_token':'709c4b77ebb79385b0d784df6fa90e500c379e8c63b6800cdff05df6a4714be5',
        'Accept': 'application/json',
             'Content-Type': 'application/json',
    }
}
  .then(function(response) {
      console.log(response.json);
    return response.json();
  })
*/
     // firebase.auth().signInWithEmailAndPassword(email, password)
      //  .then(this.onAuthSuccess.bind(this))
      //  .catch(this.onAuthFailed.bind(this));
       // .catch(() => {
       //     firebase.auth().createUserWithEmailAndPassword(email, password)
       //         .then(this.onAuthSuccess.bind(this))
       //         .catch(this.onAuthFailed.bind(this));
       // });
  }


  onAuthSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false, 
      });
  }

onAuthFailed() {
    this.setState({
        error: 'Authentication Failed',
        loading: false,
    });
}

  renderLoader() {
    if (this.state.loading) {
        return <Loader size="large"/>;
    } else {
        return <LoginButton onPress={this.onButtonPress.bind(this)} />
    }
  }



render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;
    return (
      <View style={form} >
        <Text>Login or create an account</Text>
        <MKTextField 
            text={this.state.email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField 
            text={this.state.password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            {this.renderLoader()}
        </View>
      </View>
    );
  }
}
