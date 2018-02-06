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
      </Container>
    );
  }
}

export default NHListSeparator;
