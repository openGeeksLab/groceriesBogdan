import React, { Component } from 'react';
import { connect } from 'react-redux'; //remove connect
import { Container, Title, Content } from 'native-base';


export default class Settings extends Component {
  render() {
    return (
      <Container>
        <Content>
         <Title>Settings</Title>
        </Content>
      </Container>
    );
  }
}
