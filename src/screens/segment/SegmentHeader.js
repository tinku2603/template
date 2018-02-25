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
  Segment
} from "native-base";
import styles from "./styles";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert} from 'react-native';


class SegmentNB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      students:[],
      fees:[],
      seg: 1,
      id:""
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
          console.log(value);
      
          /*
          fetch('http://'+fetchurl.CLIENT_API+'/api/students/view?ctx=student&username=abc1', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                        this.setState({students:obj });
                        this.setState({id:obj.id});  
                      // console.log(this.state.students);
                        console.log("Response object is: ", obj);
                       // console.log(this.state.students.id);
                       // console.log('id:',this.state.id);
          })
          //var url = 'http://'+fetchurl.CLIENT_API+'/api/fees/view?ctx=student&val='+this.state.students.id+'&dateStart=01-01-2018&dateEnd=25-02-2018';
          //console.log(url);
          //const id={this.state.students.id};
          console.log(this.state.id);
          fetch('http://'+fetchurl.CLIENT_API+'/api/fees/view?ctx=student&val=${id}&dateStart=01-01-2018&dateEnd=25-02-2018', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                    console.log(this.state.students.id);
                        this.setState({fees:obj });  
                        console.log("Response object is: ", obj);
          })

          */
          const students= await fetch(fetchurl.CLIENT_API+'/api/students/view?ctx=student&username=abc1', { method: 'GET',headers: {'auth_token':value} });
          const student= await response.json();
          console.log(student);
          //console.log(json.id);
          const fees=await fetch(fetchurl.CLIENT_API+'/api/fees/view?ctx=student&val='+json.id+'&dateStart=01-01-2018&dateEnd=25-02-2018', { method: 'GET',headers: {'auth_token':value} })
          const fee=await fees.json();
          console.log(fee);

          const classes=await fetch (fetchurl.CLIENT_API+'/api/class/view?ctx=id&val=2', { method: 'GET',headers: {'auth_token':value} });
          const totalfee=await respnonse3.json();
          console.log(totalfee);
  }
  render() {
    return (
      <Container>
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
            <ListItem key>
              <Body  >
                <Text >
                  Student Name:{student.name}
                </Text>
                <Text >
                  Roll Number:{student.roll_no}
                </Text>
                <Text >
                  Date Of Birth:{studnet.dob}
                </Text>
                <Text >
                  Guardian Name:{student.guardian_name}
                </Text>
                <Text >
                  Contact Number:{student.contact_number}
                </Text>
                <Text note>
                  App Username:{student.username}
                </Text>
                
              </Body>
              </ListItem>
            
        </List>
        //<Text>Puppies Selected</Text>
          }


          {this.state.seg === 2 && 
          //<Text>Will be updated soon !!!!!</Text>}
         
          <List>
           
            
             
           
            <ListItem >
           
              <Body  >
                
                <Text >
                 Total Fee : {}
                </Text>
                <Text >
                Last Paid :
                </Text>
                
                <Text >
                Last Payment date :
                </Text>
                <Text >
                Total Paid :
                </Text>
                <Text >
                Balance Fee :
                </Text>

                
              </Body>
              </ListItem>
            
        </List>
      }
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;
