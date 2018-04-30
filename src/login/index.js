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
  state={isLoggedIn:'',auth_token:'',curTime:''};

              componentDidMount=()=> {
               
                        this._loadInitialState().done();
                
              }

            _loadInitialState = async () => { 
             
            
              const Timestamp = require('react-timestamp');
              const time= new Date();
              console.log(time);
              console.log(this.state.curTime);  
              var token= await AsyncStorage.getItem("auth_token");
              var username=await AsyncStorage.getItem("username");
              const expiry=await AsyncStorage.getItem("expiry");
              console.log(username);
              console.log(expiry);
              var exp=new Date(expiry);
              console.log(exp);
              this.setState({auth_token:token});
              console.log(this.state.auth_token);
              console.log(Date(expiry));
              if (exp> time)
                console.log("greater");
              else
                console.log("lesser");
              //AsyncStorage.getItem("expiry").then((value) => this.setState({ "expiry":value}));
             console.log("mounted");
             if(exp > time && token!=null) this.setState({isLoggedIn:true});

            }

 
  render() {
            if(this.state.isLoggedIn)
              return<App/>;
            else
              return<Login onLoginPress={() => this.setState({isLoggedIn:true})}/>;

  }
}
    
