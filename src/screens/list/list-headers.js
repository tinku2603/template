import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  List,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert} from 'react-native';

class NHListHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
       calendars:[]
    };
  };
  

  componentDidMount=()=> {this._loadInitialState().done();}

  _loadInitialState = async () => {   
    var value= await AsyncStorage.getItem("auth_token");
    console.log(value);
    fetch(fetchurl.CLIENT_API+'/api/calendar/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
    .then((res)=>{return res.json();})
    .then((obj)=>{
                  this.setState({ calendars:obj.payload });  
                  console.log("Response object is: ", obj);
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
            <Title>Academic Calendar</Title>
          </Body>
          
        </Header>
        
        <Content >
                
                <List>
                 { this.state.calendars.map(calendar =>(
                 <ListItem  key={calendar.id}>
                    <Left>
                      <Text></Text>
                      <Text >
                        {calendar.date_start}:{calendar.date_end}
                      </Text>
                    </Left>
                    <Body>
                      <Text>
                        {calendar.event}
                      </Text>
                      
                    </Body>
                    </ListItem>
                 ))}
                </List>

         
        </Content>
      </Container>
    );
  }
}

export default NHListHeader;
