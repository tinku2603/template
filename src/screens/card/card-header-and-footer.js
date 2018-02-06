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
import {AsyncStorage} from 'react-native';

class NHCardHeaderAndFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[],
      timetable:[],
      seg: 2
    };
  };
  
  componentDidMount=()=> {this._loadInitialState().done();}

        _loadInitialState = async () => {   
          var value= await AsyncStorage.getItem("auth_token");
          console.log(value);
          fetch('http://'+fetchurl.CLIENT_API+'/api/instititues/view?ctx=all', { 
          method: 'GET',
          headers: {
            'auth_token':value
          } })
          .then((res)=>{return res.json();})
          .then((abt)=>{
                        this.setState({ books:abt.payload });  
                        console.log("Response object is: ", abt);
          })
        }

  

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>About Us</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>Misson</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>History</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardHeaderAndFooter;
