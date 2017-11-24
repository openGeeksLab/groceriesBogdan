import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Alert,
  Text
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
  Label,
  Left,
  Right,
  Body } from 'native-base';

export default class AddNewList extends Component {
  static navigationOptions = () => ({
    title: 'Lists',
    header: null
  });

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit() {
    if (this.state.name || this.state.name !== '') {
      this.props.addList(this.state.name);
      this.props.navigation.goBack();
    } else {
      Alert.alert(
         'Please Enter List Name...'
      );
    }
  }

  onChange(name) {
    this.setState({ name });
  }

  render() {
    return (
      <Container>
       <Header>
        <Left>
          <Button style={styles.leftMenuButton} transparent onPress={this.onSubmit}>
            <Icon name='md-add' style={styles.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Title>Lists</Title>
        </Body>
        <Right>
        <Button disabled style={styles.rightMenuButton} transparent>
          <Icon name='ios-create-outline' style={styles.rightMenuButton} />
        </Button>
        </Right>
        </Header>
       <Content style={styles.container}>
         <Title style={styles.title}>Add new list</Title>
         <Item style={styles.inputWrap}>
           <Input
              style={styles.input}
              placeholder="List Name..."
              maxLength={20}
              autoFocus
              onSubmitEditing={this.onSubmit}
              returnKeyType={'done'}
              onChangeText={(name) => this.onChange(name)}
              value={this.state.listName}
           />
         </Item>
         <Label style={styles.label}>
            Characters left
            <Text style={{ fontWeight: 'bold' }}>{ ` ${20 - this.state.name.length}`}</Text>
          </Label>
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
  },
  inputWrap: {
    marginLeft: 15,
    marginRight: 30,
    borderColor: '#000'
  },
  input: {
    fontSize: 20
  },
  label: {
    textAlign: 'right',
    marginRight: 35,
    color: '#aaa',
    fontSize: 13,
    marginTop: 5
  }
});

AddNewList.propTypes = {
  addList: PropTypes.func,
  navigation: PropTypes.object,
};
