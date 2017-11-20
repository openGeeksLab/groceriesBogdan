import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class ProductItem extends Component {
  render() {
    return (
      <Container>
        <Content>
         <Title>Product item</Title>
        </Content>
      </Container>
    );
  }
}
