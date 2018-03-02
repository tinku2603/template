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
import styles from "./styles";
import fetchurl from "../../login/fetchurl";
import {AsyncStorage,Alert,ImageBackground} from 'react-native';
const Item = Picker.Item;

const background = require("../../../assets/background.png");
class SegmentNB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      },
      bookinfo:[],
      timetableinfo:[],
      sudentsinfo:'',
      seg: 2
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
         
          const students= await fetch(fetchurl.CLIENT_API+'/api/students/view?ctx=student&username='+username, { method: 'GET',headers: {'auth_token':value} });
          const student= await students.json();
          console.log(student);
          this.setState({studentinfo:student});

          const books= await fetch(fetchurl.CLIENT_API+'/api/books/view?ctx=class&val='+student.class_id, { method: 'GET',headers: {'auth_token':value} });
          const book= await books.json();
          console.log(book);
          this.setState({bookinfo:book.payload})
          //console.log(json.id);
          const timetables=await fetch(fetchurl.CLIENT_API+'/api/timetable/view?ctx=all', { method: 'GET',headers: {'auth_token':value} })
          const timetable=await timetables.json();
          console.log(timetable);
          this.setState({timetableinfo:timetable.payload})

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
         { this.state.bookinfo.map(book =>(
            <ListItem key={book.id}>
              <Body  >
                <Text >
                  {book.name}
                </Text>
                
              </Body>
              </ListItem>
            ) )}
        </List>
        //<Text>Puppies Selected</Text>
          }
          {this.state.seg === 2 && 
          <List>
           { this.state.timetableinfo.map(timetable =>(
              
          
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
        </ImageBackground>
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