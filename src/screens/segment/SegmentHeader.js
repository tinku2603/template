import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Title,
  Icon,
  Left,
  Right,
  Picker,
  List,
  ListItem,
  Body,
  H1,H2,
  Segment
} from "native-base";
import styles from "./styles";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert,ImageBackground} from 'react-native';

const background = require("../../../assets/background.png");

class SegmentNB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      
      fees:'',
      seg: 1,
      id:"",
      studentinfo:'',
      student:'',
      classinfo:'',
      
    };
  };

  onValueChange(value:string) {
    this.setState({
      selected1: value
    });
  }
  
  componentDidMount=()=> {this._loadInitialState().done();}

        _loadInitialState = async () => {   
          var value= await AsyncStorage.getItem("auth_token");
          var username=await AsyncStorage.getItem("username");
          console.log(value);
          console.log(username);
      
      
          const students= await fetch(fetchurl.CLIENT_API+'/api/students/view?ctx=student&username='+username, { method: 'GET',headers: {'auth_token':value} });
          const student= await students.json();
          console.log(student);
          this.setState({studentinfo:student});
          //console.log(json.id);
          const fees=await fetch(fetchurl.CLIENT_API+'/api/fees/view?ctx=student&val='+student.id+'&dateStart=01-01-2018&dateEnd=28-02-2018', { method: 'GET',headers: {'auth_token':value} })
          const fee=await fees.json();
          console.log(fee);
          this.setState({feeinfo:fee.payload});

          const classes=await fetch (fetchurl.CLIENT_API+'/api/class/view?ctx=id&val='+student.class_id, { method: 'GET',headers: {'auth_token':value} });
          const classdata=await classes.json();
          console.log(classdata);
          this.setState({classinfo:classdata});
  }
  render() {
    return (
      <Container>
        <ImageBackground source={background} style={styles.imageContainer}>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Student Information</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        
        <Segment>
          <Button
            first
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>Personal Information</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Fee Details</Text>
          </Button>
         
        </Segment>

        <Content padder>
          {this.state.seg === 1 && 
          <List>
           
            <ListItem >
              
                <Text >
                  Student Name:{this.state.studentinfo.name}
                </Text>
            </ListItem>
            <ListItem>
                <Text >
                  Roll Number:{this.state.studentinfo.roll_no}
                </Text>
                </ListItem>
            <ListItem>
                <Text >
                  Date Of Birth:{this.state.studentinfo.dob}
                </Text>
                </ListItem>
            <ListItem>
                <Text >
                  Guardian Name:{this.state.studentinfo.guardian_name}
                </Text>
                </ListItem>
            <ListItem>
                <Text >
                  Contact Number:{this.state.studentinfo.contact_number}
                </Text>
                </ListItem>

            <ListItem>
              <Text >
                  Class:{this.state.classinfo.name}
                </Text>
              
              </ListItem>
              <ListItem>
                <Text note>
                  App Username:{this.state.studentinfo.username}
                </Text>
                </ListItem>            
        
        </List>
        //<Text>Puppies Selected</Text>
          }


          {this.state.seg === 2 && 
          //<Text>Will be updated soon !!!!!</Text>}
         
          <List>
           <ListItem>
           <Text >
                 Total Fee : {this.state.classinfo.fee}
                </Text>
            </ListItem>
            
           { this.state.feeinfo.map(fee =>(   
           
            <ListItem key={fee.id}>
           
              <Body  >
                
               
                <Text >
                 Paid :{fee.amount}
                </Text>
                
                <Text >
                Remarks :{fee.notes}
                </Text>
               

                
              </Body>
              </ListItem>
           ))}

           <ListItem>
           <Text >
               <H2> Total Paid :</H2>
                </Text>
                
            </ListItem>
            <ListItem>
            <Text >
               <H2> Balance Fee :</H2>
                </Text>
              </ListItem>
        </List>

      }
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default SegmentNB;
