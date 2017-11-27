import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  StyleSheet,
} from 'react-native';
import {
  FooterTab,
  Button,
  Icon
} from 'native-base';

export default class Filter extends Component {
  render() {
    return (
      <FooterTab style={styles.container}>
           <Button
            active={this.props.activeFilter === 'ALL'}
            style={styles.button}
            onPress={() => this.props.setFilter('ALL')}
           >
             <Icon
              active={this.props.activeFilter === 'ALL'}
              name='md-list' style={styles.icon}
             />
           </Button>
           <Button
            active={this.props.activeFilter === 'CART'}
            style={styles.button}
            onPress={() => this.props.setFilter('CART')}
           >
             <Icon
              active={this.props.activeFilter === 'CART'}
              name='md-cart' style={styles.icon}
             />
           </Button>
     </FooterTab>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10
  },
  icon: {
    fontSize: 30
  }
});

Filter.propTypes = {

};
