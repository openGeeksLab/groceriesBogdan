import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class AddNewProduct extends Component {
  static navigationOptions = {
    title: 'Add New Product',
    headerBackTitle: null,
  };

  render() {
    return (
      <Container>
        <Content>
         <Title>Add Product</Title>
        </Content>
      </Container>
    );
  }
}
