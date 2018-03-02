import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import styles from "./styles";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,ImageBackground} from 'react-native';


const background = require("../../../assets/background.png");
class Basic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notices:[]
      
    };
  };


  componentDidMount=()=> {this._loadInitialState().done();}

        _loadInitialState = async () => {   
          var value= await AsyncStorage.getItem("auth_token");
          console.log(value);
          fetch(fetchurl.CLIENT_API+'/api/notices/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                        this.setState({ notices:obj.payload });  
                        console.log("Response object is: ", obj);
          })

        }


  render() {
    return (
      <Container style={styles.container}>
      <ImageBackground source={background} style={styles.imageContainer}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>School Notices</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        { this.state.notices.map(notice =>(
          <Card style={styles.mb} key={notice.id} >
          <CardItem header>
              <Text>{notice.title}</Text>
            </CardItem>
          <CardItem >
              <Body>
                <Text note>Date:</Text>
                <Text>{notice.content}</Text>
              </Body>
            </CardItem>
             
          </Card>
       ))}
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Basic;
