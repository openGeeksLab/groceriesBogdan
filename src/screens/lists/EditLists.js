import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet
} from 'react-native';
import { Container, Button, Icon, Content, Title, Header, Left, Right, Body } from 'native-base';
import EditListItem from './EditListItem';


class EditLists extends Component {
  static navigationOptions = () => ({
    title: 'Lists',
    header: null
  });

  render() {
    return (
      <Container>
        <Header>
           <Left>
             <Button style={styles.leftMenuButton} transparent onPress={() => this.props.navigation.navigate('NewList')}>
               <Icon name='md-add' style={styles.headerIcon}/>
             </Button>
           </Left>
           <Body>
             <Title>Lists</Title>
           </Body>
           <Right>
             <Button style={styles.rightMenuButton} transparent onPress={() => this.props.navigation.navigate('Lists')}>
               <Icon name='ios-create-outline' style={styles.headerIcon}/>
             </Button>
           </Right>
         </Header>
        <Content style={styles.container}>
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
    //marginLeft: 5
  },
  containerstyle: {
    color: 'red'
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

EditLists.propTypes = {
  navigation: PropTypes.object,
  lists: PropTypes.array,
  onDelete: PropTypes.func
};

export default EditLists;
