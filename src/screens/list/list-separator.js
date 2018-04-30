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
  Left,
  List,
  Right,
  Body,
  Separator
} from "native-base";
import styles from "./styles";
import Telugu from "./telugu";

const datas = [
  {
    route: "Telugu",
    text: "Telugu",
    grade:"A1"
  },
  {
    route: "Hindi",
    text: "Hindi",
    grade:"C1"
  },
  {
    route: "English",
    text: "English",
    grade:"B1"
  },
  {
    route: "Maths",
    text: "Mathematics",
    grade:"A1"
  },
  {
    route: "Science",
    text: "Science",
    grade:"B2"
  },
  {
    route: "Social",
    text: "Social Science",
    grade:"C1"
  },
  {
    //route: "NHListSeparator",
    text: "Computer(Misc Sub)",
    grade:"45/50"
  }
];
const coso=[
  {
    text:"Work Education",
    grade:"B"
  },
  {
    text:"Art Education",
    grade:"B"
  },
  {
    text:"Health and Physical",
    grade:"B"
  },
  {
    text:"Discipline",
    grade:"A"
  },
  {
    text:"Attendance(%)",
    grade:"93.6"
  },
];

class NHListSeparator extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body >
            <Title>Exam Results</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <ListItem itemDivider>
            <Text>Term 1</Text>
          </ListItem>
          
        
          <List
            dataArray={datas}
            renderRow={data =>

           
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Text>
                    {data.grade}
                    </Text>
                </Right>
              </ListItem>}
          />
          <Separator bordered>
            <Text>Co-Scolastic Grades</Text>
          </Separator>
                    
        
          <List
            dataArray={coso}
            renderRow={data =>

           
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Text>
                    {data.grade}
                    </Text>
                </Right>
              </ListItem>}
          />
          <Separator bordered>
            <Text>Remarks: Qualified</Text>
          </Separator>
          
          <ListItem itemDivider >
            <Text>Term 2</Text>
          </ListItem>
          
        
          <List
            dataArray={datas}
            renderRow={data =>

           
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Text>
                    {data.grade}
                    </Text>
                </Right>
              </ListItem>}
          />
          <Separator bordered>
            <Text>Co-Scolastic Grades</Text>
          </Separator>
                    
        
          <List
            dataArray={coso}
            renderRow={data =>

           
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Text>
                    {data.grade}
                    </Text>
                </Right>
              </ListItem>}
          />
        </Content>
       
      </Container>
    );
  }
}

export default NHListSeparator;


/* 
<Content>
          <Separator bordered>
            <Text>Unit Test-1</Text>
          </Separator>
          <List>
          <ListItem>
            <Text>Telugu:</Text>
          </ListItem>
          <ListItem>
            <Text>Hindi:</Text>
          </ListItem>
          <ListItem>
            <Text>English:</Text>
          </ListItem>
          <ListItem>
            <Text>Maths:</Text>
          </ListItem>
          <ListItem>
            <Text>Scinece:</Text>
          </ListItem>
          <ListItem >
            <Text>Social:</Text>
          </ListItem>
          <ListItem>
            <Text>Total:</Text>
          </ListItem>

          <ListItem last>
            <Text>Class Rank:</Text>
          </ListItem>
          </List>
          <Separator bordered>
            <Text>Quaterly Examination</Text>
          </Separator>
          <ListItem>
            <Text>Telugu:</Text>
          </ListItem>
          <ListItem>
            <Text>Hindi:</Text>
          </ListItem>
          <ListItem>
            <Text>English:</Text>
          </ListItem>
          <ListItem>
            <Text>Maths:</Text>
          </ListItem>
          <ListItem>
            <Text>Scinece:</Text>
          </ListItem>

          <ListItem >
            <Text>Social:</Text>
          </ListItem>
          <ListItem>
            <Text>Total:</Text>
          </ListItem>

          <ListItem last>
            <Text>Class Rank:</Text>
          </ListItem>
        </Content>

        */