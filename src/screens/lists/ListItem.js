import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';
// useseless lines


const ListItem = props => {

  const onPressList = () => {
    props.navigation.navigate('ProductsList', {
      indexList: props.index,
      titleList: props.list.listName
    })
  }
  return (
    <View>
      <TouchableOpacity onPress={onPressList} style={styles.container}>
        <Text style={styles.listTitle}>{props.list.listName}</Text>
        <Icon name='arrow-forward' style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
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

ListItem.propTypes = {
  index: PropTypes.number,
  navigation: PropTypes.object,
  list: PropTypes.object
};

export default ListItem;
