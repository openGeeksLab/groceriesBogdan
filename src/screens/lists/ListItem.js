import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';



class ListItem extends Component {
  constructor(props) {
    super(props);

    this.onPressList = this.onPressList.bind(this)
  }

  onPressList() {
    this.props.navigation.navigate('ProductsList', {
      indexList: this.props.index,
      titleList: this.props.list.listName
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPressList} style={styles.container}>
          <Text style={styles.listTitle}>{this.props.list.listName}</Text>
          <Icon name='arrow-forward' style={styles.icon}/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 45,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 2,
    paddingLeft: 10,
    paddingRight: 15,
  },
  listTitle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    fontSize: 15
  }
});

export default connect()(ListItem);
