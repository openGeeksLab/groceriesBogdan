import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import { Container, Button, Icon, Content, Title } from 'native-base';
import EditListItem from './EditListItem';


class EditLists extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Lists',
    headerBackTitle: null,
    headerRight: (
      <Button style={styles.rightMenuButton} transparent onPress={() => navigation.navigate('NewList')}>
        <Icon name='ios-add' style={styles.headerIcon}/>
      </Button>
    )
  });

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {this.props.lists.length > 0 ? this.props.lists.map((list, index) => (
            <EditListItem
              key={index}
              index={index}
              list={list}
              onDelete={this.props.onDelete}
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
    fontSize: 30
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 50
  }
});

export default EditLists;
