import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Container, Button, Icon } from 'native-base';
import ListItem from './ListItem.js';




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
      <Image style={{height: 20, width: 20}}
        source={require('../../img/edit.png')}
      />
      </Button>
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.listsData.map((list, index) => (
            <ListItem
              key={index}
              index={index}
              list={list}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listsData: state.listsReducer
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  leftMenuButton: {
    marginLeft: 10
  },
  rightMenuButton: {
    marginRight: 10
  },
  headerIcon: {
    color: 'black'
  }
});

export default connect(mapStateToProps)(Lists);
