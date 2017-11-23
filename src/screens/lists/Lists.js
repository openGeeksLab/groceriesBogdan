import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import { Container, Button, Icon, Content, Title } from 'native-base';
import ListItem from './ListItem';


class Lists extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Lists',
    headerLeft: (
      <Button style={styles.leftMenuButton} transparent onPress={() => navigation.navigate('Settings')}>
        <Icon name='md-settings' style={styles.headerIcon}/>
      </Button>
    ),
    headerRight: (
      <Button style={styles.rightMenuButton} transparent onPress={() => navigation.navigate('EditLists')}>
        <Icon name='ios-create-outline' style={styles.headerIcon}/>
      </Button>
    )
  });

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {this.props.lists.length > 0 ? this.props.lists.map((list, index) => (
            <ListItem
              key={index}
              index={index}
              list={list}
              navigation={this.props.navigation}
            />
          )) : <Title style={styles.title}>No Lists</Title>}
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
    marginLeft: 5
  },
  rightMenuButton: {
    marginRight: 5
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

export default Lists;
