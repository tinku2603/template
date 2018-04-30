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

class English extends Component {
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
            <Title>English</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          
          <List>
          <ListItem>
            <Text>Periodic Test:</Text>
            <Right><Text> 6.5/10</Text></Right>
          </ListItem>
          <ListItem>
            <Text>Notebook Submission:</Text>
            <Right><Text> 5/5</Text></Right>
          </ListItem>
          <ListItem>
            <Text>Subject Enrichment:</Text>
            <Right><Text> 5/5</Text></Right>
          </ListItem>
          <ListItem>
            <Text>Term Exam:</Text>
            <Right><Text> 68/80</Text></Right>
          </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default English;
