import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  StyleSheet,
} from 'react-native';
import {
  Container,
  Button,
  Content,
  Title,
  Text,
  Header,
  Left,
  Right,
  Body } from 'native-base';

export default class Settings extends Component {
  static navigationOptions = () => ({
    title: 'Settings',
    header: null,
  });

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Header>
           <Left>
             <Button
              style={styles.leftMenuButton}
              transparent onPress={() => navigation.goBack()}
             >
               <Text>Cancel</Text>
             </Button>
           </Left>
           <Body>
             <Title>Lists</Title>
           </Body>
           <Right>
             <Button
              style={styles.rightMenuButton}
              transparent onPress={() => navigation.goBack()}
             >
               <Text>Done</Text>
             </Button>
           </Right>
         </Header>
        <Content style={styles.container}>
          <Title>Setting Options</Title>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  leftMenuButton: {
    //marginLeft: 5
  },
  rightMenuButton: {
    //marginRight: 5
  },
  headerIcon: {
    color: 'black',
    fontSize: 25
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 50
  }
});

Settings.propTypes = {

};
