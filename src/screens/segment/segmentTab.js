import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Picker,
  Right,
  Body,
  Segment,
  List,
  ListItem
} from "native-base";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert} from 'react-native';
const Item = Picker.Item;

class SegmentNB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      },
      books:[],
      timetables:[],
      seg: 2
    };
  };
  
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  componentDidMount=()=> {this._loadInitialState().done();}

        _loadInitialState = async () => {   
          var value= await AsyncStorage.getItem("auth_token");
          console.log(value);
          fetch('http://'+fetchurl.CLIENT_API+'/api/books/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                        this.setState({ books:obj.payload });  
                        console.log("Response object is: ", obj);
          })

          fetch('http://'+fetchurl.CLIENT_API+'/api/timetable/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                        this.setState({ timetables:obj.payload });  
                        console.log("Response object is: ", obj);
          })
/*
          fetch('http://'+fetchurl.CLIENT_API+'/api/books/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
          .then((res)=>{return res.json();})
          .then((obj)=>{
                        this.setState({ books:obj.payload });  
                        console.log("Response object is: ", obj);
                  })
     */     

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
            <Title>Class Information</Title>
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
            <Text>Books</Text>
          </Button>
          <Button
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Timetable</Text>
          </Button>
         
        </Segment>

        <Content padder>
          {this.state.seg === 1 && 
          <List>
           { this.state.books.map(book =>(
            <ListItem key={book.id}>
              <Body  >
                <Text >
                  {book.name}
                </Text>
                <Text note >
                  {book.subject_id}
                </Text>
              </Body>
              </ListItem>
            ) )}
        </List>
        //<Text>Puppies Selected</Text>
          }
          {this.state.seg === 2 && 
          <List>
           { this.state.timetables.map(timetable =>(
              
          
            <ListItem key={timetable.id}>
            
            
              <Left  >
                <Text >
                  Period :{timetable.time_start}-{timetable.time_end}
                </Text>
              </Left>
              <Body>
                <Text >
                  Subject/Activity:{timetable.subject_id}
                </Text>
              </Body>
              
              
              </ListItem>
            ) )}
        </List>
        
        //<Text>Will be updated soon !!!!!</Text>
      }
         
        </Content>
      </Container>
    );
  }
}

export default SegmentNB;

/*  <Button
            last
            active={this.state.seg === 3 ? true : false}
            onPress={() => this.setState({ seg: 3 })}
          >
          
            <Text>Exam Syllabus</Text>
          </Button>
   {this.state.seg === 3 && <Text>Cubs Selected</Text>}
   */