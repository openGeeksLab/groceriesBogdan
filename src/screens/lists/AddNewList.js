import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Container,
  Title,
  Content,
  Button,
  Item,
  Input,
  Icon,
  Header,
  Left,
  Right,
  Body } from 'native-base';


export default class AddNewList extends Component {
  static navigationOptions = () => ({
    title: 'Lists',
    header: null
  });

  constructor(props){
    super(props);

    this.state = {
      listName: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if (this.state.listName || this.state.listName !== '') {
      //console.log(this.state.listName)
      this.props.onAdd(this.state.listName)
      this.props.navigation.navigate('EditLists');
    } else {
      Alert.alert(
         'Please Enter List Name...'
      )
    }
  }

  render() {
    return (
      <Container>
       <Header>
        <Left>
          <Button style={styles.leftMenuButton} transparent onPress={this.onSubmit}>
            <Icon name='md-add' style={styles.headerIcon}/>
          </Button>
        </Left>
        <Body>
          <Title>Lists</Title>
        </Body>
        <Right>
        <Button disabled style={styles.rightMenuButton} transparent>
          <Icon name='ios-create-outline' style={styles.rightMenuButton}/>
        </Button>
        </Right>
        </Header>
       <Content style={styles.container}>
         <Title style={styles.title}>Add new list</Title>
         <Item>
           <Input
            placeholder="List Name..."
            maxLength={20}
            autoFocus={true} // use autoFocus without ={true}
            onSubmitEditing={this.onSubmit}
            returnKeyType={'done'}
            onChangeText={(listName) => this.setState({listName})}
            value={this.state.listName}
          />
         </Item>
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
  title: {
    marginTop: 40,
    marginBottom: 40
  },
  rightMenuButton: {
    color: '#ccc'
  },
  leftMenuButton: {
    //marginLeft: 5
  },
  headerIcon: {
    color: 'black',
    fontSize: 25
  }
});

AddNewList.propTypes = {
  onAdd: PropTypes.func,
  navigation: PropTypes.object,
};
