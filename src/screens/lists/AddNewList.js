import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class AddNewList extends Component {
  static navigationOptions = {
    title: 'Add List',
    headerBackTitle: null,
  };

  render() {
    return (
      <Container>
        <Content>
         <Title>Create List</Title>
        </Content>
      </Container>
    );
  }
}
