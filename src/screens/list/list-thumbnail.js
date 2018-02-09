import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";
import { ActivityIndicator} from 'react-native';
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert} from 'react-native';

const sankhadeep = require("../../../assets/contacts/supriya.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.jpg");

class NHListThumbnail extends Component {
  constructor(props){
    super(props);
    this.state = {
        staffs : []
    }
}

  state={isLoading:true,auth_token:'',dataSource:''};

 

  componentDidMount=()=> {
    this._loadInitialState().done();

}

_loadInitialState = async () => {   
var value= await AsyncStorage.getItem("auth_token");
console.log(value);
fetch('http://'+fetchurl.CLIENT_API+'/api/staff/view?ctx=all', {  
    method: 'GET',
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth_token':value
            
            ,
        }
      })
      .then((res)=>{
        console.log("Is OK? ", res.ok);
        console.log("Status Code: ", res.status);
        return res.json();      // or `res.text();` 
      })
      .then((obj)=>{
                    this.setState({ staffs:obj.payload });  
                    console.log("Response object is: ", obj);
                    //console.log(obj.payload.name);
                    //var content=obj.payload;
                   // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                   // this.setState({
                   //   dataSource: obj.payload
                   //   });
                    //console.log(this.state.dataSource);

      })
      .catch((error) => {
        console.error(error);})

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
            <Title>Our Staff</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
             { this.state.staffs.map(staff =>(
              <ListItem thumbnail key={staff.id} >
                <Left>
                <Thumbnail square size={55} />
                </Left>
                <Body >
                  <Text >
                    {staff.name}
                  </Text>
                  <Text note >
                    {staff.designation}
                  </Text>
                  <Text note >
                    {staff.contact_number}
                  </Text>
                </Body>
              </ListItem>
              ) )}
          </List>
        </Content>
      </Container>
    )
  }
  
}


export default NHListThumbnail;


//<Thumbnail square size={55} source={data.img} />
//onPress={this.GetItem.bind(this, rowData.name)}
