import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class EditLists extends Component {
  static navigationOptions = {
    title: 'Edit Lists',
    headerBackTitle: null,
  };

  render() {
    return (
      <Container>
        <Content>
         <Title>Edit Lists</Title>
        </Content>
      </Container>
    );
  }
}
