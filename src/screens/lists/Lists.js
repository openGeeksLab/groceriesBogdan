import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Button,
  Icon,
  Content,
  Title,
  Header,
  Left,
  Right,
  Body } from 'native-base';
import ListItem from './ListItem';


class Lists extends Component {
  static navigationOptions = () => ({
    title: 'Lists',
    header: null,
  });

  navigateToProducts = (index, name) => {
    this.props.navigation.navigate('ProductsList', {
      index,
      name
    });
  }

  render() {
    return (
      <Container>
        <Header>
           <Left>
             <Button
              style={styles.leftMenuButton}
              transparent onPress={() => this.props.navigation.navigate('Settings')}
             >
               <Icon name='ios-settings-outline' style={styles.headerIcon} />
             </Button>
           </Left>
           <Body>
             <Title>Lists</Title>
           </Body>
           <Right>
             <Button
              style={styles.rightMenuButton}
              transparent onPress={() => this.props.navigation.navigate('EditLists')}
             >
               <Icon name='ios-create-outline' style={styles.headerIcon} />
             </Button>
           </Right>
         </Header>
        <Content style={styles.container}>
          {this.props.lists.length > 0 ? this.props.lists.map((list, index) => (
            <ListItem
              key={index}
              index={index}
              list={list}
              navigateToProducts={this.navigateToProducts}
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
    //marginLeft: 5
  },
  rightMenuButton: {
    //marginRight: 5
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

Lists.propTypes = {
  navigation: PropTypes.object,
  lists: PropTypes.array
};

export default Lists;
