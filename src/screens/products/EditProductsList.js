import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class EditProductsList extends Component {
  static navigationOptions = {
    title: 'EditProductsList',
    headerBackTitle: null,
  };

  render() {
    return (
      <Container>
        <Content>
         <Title>EditProductsList</Title>
        </Content>
      </Container>
    );
  }
}
