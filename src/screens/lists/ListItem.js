import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';



class ListItem extends Component {
  constructor(props) {
    super(props);

    this.index = this.props.index;
    this.list = this.props.list;
  }


  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.listTitle}>{this.list.listName}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 36,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1
  },
  listTitle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  }
});

export default connect()(ListItem);
