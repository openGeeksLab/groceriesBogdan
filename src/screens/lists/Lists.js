import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import { Container, Title } from 'native-base';

import ListItem from './ListItem.js'




class Lists extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Lists',
    headerLeft: <Button title="+" onPress={() => navigation.navigate('NewList')}/>,
    headerBackTitle: null,
  });

  render() {
    return (
      <Container>
        <ScrollView>
          {this.props.listsData.map((list, index) => (
            <ListItem
              key={index}
              index={index}
              list={list}
            />
          ))}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  listsData: state.listsReducer
});

export default connect(mapStateToProps)(Lists);
