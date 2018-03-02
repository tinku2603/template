import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  ActivityIndicator
} from "native-base";
import {AsyncStorage,ImageBackground} from 'react-native';


const background = require("../../assets/background.png");
import styles from "./flstyles";
//import fetch from "fetch";
//import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import fetchurl from "./fetchurl";
import App from "../App"



class Login extends Component {


  state={
    username:'',
    password:'',
    isLoggingIn:false,
    message:'',
    auth_token:''
  };

  /*
  componentDidMount=()=> {
    this._loadInitialState().done();
    
   }
  
   _loadInitialState = async () => {
  
   // AsyncStorage.getItem("auth_token").then((value) => this.setState({ "auth_token":value})
    //                                  .then(res => {
    //                                    console.log(res);
    //                                  }));
    
      
    var value= await AsyncStorage.getItem("auth_token");
    
    console.log(value);
    this.setState({auth_token:value});
    console.log(this.state.auth_token);
    AsyncStorage.getItem("expiry").then((value) => this.setState({ "expiry":value}));
    console.log("mounted");
    if (value!=null) this.props.onLoginPress();
   }
   */
 // componentDidMount=()=> {
 //   AsyncStorage.getItem("auth_token").then((value) => this.setState({ "auth_token":value}));
 //   console.log("mounted");
 // }
        userLogin= async() => {
                   //const { username, password } = this.state;
                    this.setState({message: '', isLogginIn: true,token:null});
                    var proceed = null;
                    
                  const login=await  fetch(fetchurl.CLIENT_API, {  
                        method: 'POST',
                        headers: {'Accept': 'application/json','Content-Type': 'application/json',},
                        body: JSON.stringify({username: this.state.username,plain_text_password: this.state.password,})
                      })
                      .then((res) =>{
                          if(res.ok) {this.props.onLoginPress();};
                          return res.json();      // or `res.text();` 
                          })
                          .then((obj)=>{
                                        console.log("Response object is: ", obj);
                                          AsyncStorage.setItem("auth_token", obj.auth_token);
                                          AsyncStorage.setItem("expiry", obj.expires_at);
                                          AsyncStorage.setItem("username",obj.username);

                                         
                                      
                                          console.log("i have added",obj.username);            
                          })
                          .catch(err => {
                              this.setState({ message: err.message });
                              this.setState({ isLoggingIn: false })
                          });

                  

          }               
          
          clearUsername = () => {
                    this._username.setNativeProps({ text: '' });
                    this.setState({ message: '' });
          }
                
          clearPassword = () => {
                    this._password.setNativeProps({ text: '' });
                    this.setState({ message: '' });
          }
                                                                                                                                                                              
        render() {
          return (
            <Container style={styles.container}>
              <Header>
                
                <Body>
                  <Title>School App</Title>
                </Body>
                <Right />
              </Header>
              <ImageBackground source={background} style={styles.imageContainer}>

              <Content justifyContent='center'>
                <Form>
                  <Item fixedLabel>
                    <Label>Username</Label>
                    <Input  ref={component => this._username = component}
		    	                  placeholder='srinath' 
                            onChangeText={(username) => this.setState({username})}
                            autoFocus={true}
                            onFocus={this.clearUsername} 
                    />
                  </Item>
                  
                  <Item fixedLabel last>
                    <Label>Password</Label>
                    <Input  
                            ref={component => this._password = component}
                            placeholder='******' 
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                            onFocus={this.clearPassword}
                            onSubmitEditing={this.userLogin} 
                    />
                  </Item>
                </Form>
                
                               
                {!!this.state.message && (
                                          <Text
                                            style={{fontSize: 14, color: 'red', padding: 5}}>
                                            {this.state.message}
                                          </Text>
                                        )}
                {this.state.isLoggingIn && <ActivityIndicator />}
                
                <Button block style={{ margin: 15, marginTop: 50 }} 
                disabled={this.state.isLoggingIn||!this.state.username||!this.state.password} onPress={this.userLogin}>
                  <Text>Sign In</Text>
                </Button>
              </Content>
              </ImageBackground>
            </Container>
          );
        }
      }

export default Login;
