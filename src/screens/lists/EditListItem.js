import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

const EditListItem = props => {
  const deleteList = () => {
    props.deleteList(props.list.id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={deleteList}>
        <Icon name='ios-remove-circle' style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.listTitle}>{props.list.name}</Text>
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
    justifyContent: 'flex-start',
    borderColor: 'grey',
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listTitle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    fontSize: 25,
    marginRight: 5,
    color: 'red'
  }
});

EditListItem.propTypes = {
  onDelete: PropTypes.func,
  navigation: PropTypes.object,
  index: PropTypes.number,
  list: PropTypes.object,
};

export default EditListItem;
