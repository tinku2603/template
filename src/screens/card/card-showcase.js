import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
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
  Thumbnail,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,ImageBackground} from 'react-native';
const background = require("../../../assets/background.png");
import variable from "../../theme/variables/platform";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

class NHCardShowcase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities:[],
      titles:[],
      seg: 2
    };
  };

  componentDidMount=()=> {this._loadInitialState().done();}

  _loadInitialState = async () => {   
    var value= await AsyncStorage.getItem("auth_token");
    console.log(value);
    fetch(fetchurl.CLIENT_API+'/api/self/view?ctx=eca', {method: 'GET',headers: {'auth_token':value } 
    })
    .then((res)=>{return res.json();})
    .then((abt)=>{
                  this.setState({ activities:abt });
                   
                  console.log("Response object is: ", abt);
                 console.log(this.state.activities);
    })
  }



  render() {
    return (
      <Container style={styles.container}>
      <ImageBackground source={background} style={styles.imageContainer}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>School Activities</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        {this.state.activities.map( activity => (
          <Card style={styles.mb} key={activity.id}>
            
            <CardItem header>
              <Text>{activity.name}</Text>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                 {activity.description}
                </Text>
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

export default NHCardShowcase;
