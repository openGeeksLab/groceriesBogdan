import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class ProductList extends Component {
  render() {
    return (
      <Container>
        <Content>
         <Title>Product List</Title>
        </Content>
      </Container>
    );
  }
}
