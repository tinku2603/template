import React, { Component} from "react";
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
  Text
} from "native-base";
import {AsyncStorage} from 'react-native'
import styles from "./flstyles";
import fetchurl from "./fetchurl";
import Login from "./login"
import App from "../App"
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { StyleProvider } from "native-base";


export default class Main extends Component {
  state={isLoggedIn:'',auth_token:''};
  
              componentDidMount=()=> {
                        this._loadInitialState().done();
                
              }

            _loadInitialState = async () => {   
              var value= await AsyncStorage.getItem("auth_token");
              var username=await AsyncStorage.getItem("username");
              console.log(username);
              this.setState({auth_token:value});
              console.log(this.state.auth_token);
              AsyncStorage.getItem("expiry").then((value) => this.setState({ "expiry":value}));
             // console.log("mounted");
             if(value!=null) this.setState({isLoggedIn:true});

            }

 
  render() {
            if(this.state.isLoggedIn)
              return<App/>;
            else
              return<Login onLoginPress={() => this.setState({isLoggedIn:true})}/>;

  }
}
    
