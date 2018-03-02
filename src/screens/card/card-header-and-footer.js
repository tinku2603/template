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
class NHCardHeaderAndFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institute:[],
      timetable:[],
      seg: 2
    };
  };
  
  componentDidMount=()=> {this._loadInitialState().done();}

        _loadInitialState = async () => {   
          var value= await AsyncStorage.getItem("auth_token");
          console.log(value);
          fetch(fetchurl.CLIENT_API+'/api/self/view?ctx=institute', {method: 'GET',headers: {'auth_token':value } 
          })
          .then((res)=>{return res.json();})
          .then((abt)=>{
                        this.setState({ history:abt.history });
                        this.setState({vision:abt.vision_statement});  
                        this.setState({institute:abt});
                        console.log("Response object is: ", abt);
                       console.log(this.state.institute);
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
            <Title>About Us</Title>
          </Body>
          <Right />
        </Header>
        <Content padder >
        
          <Card style={styles.mb}>
            <CardItem header>
              <Text>Vision</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.state.vision}
                </Text>
              </Body>
            </CardItem>
            
          </Card>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>History</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.state.history}
                </Text>
              </Body>
            </CardItem>
            
          </Card>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>Contact</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Phone :{this.state.institute.contact_number}
                </Text>
                <Text>
                  Email :{this.state.institute.email}
                </Text>
                <Text>
                  Address :{this.state.institute.address}
                </Text>
              </Body>
            </CardItem>
            
          </Card>
        
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default NHCardHeaderAndFooter;
