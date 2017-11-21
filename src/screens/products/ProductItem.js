import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class ProductItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.productTitle}>{this.props.productName}</Text>
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
  productTitle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  }
});
