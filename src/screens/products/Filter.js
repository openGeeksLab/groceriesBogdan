import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Title, Content } from 'native-base';


export default class Filter extends Component {
  render() {
    return (
      <Container>
        <Content>
         <Title>Filter</Title>
        </Content>
      </Container>
    );
  }
}
