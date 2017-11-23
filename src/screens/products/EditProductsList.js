import React, { Component } from 'react';
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
