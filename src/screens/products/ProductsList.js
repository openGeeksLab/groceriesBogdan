import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Button, Icon, Content, Title, Header, Left, Right, Body } from 'native-base';
import {
  StyleSheet,
} from 'react-native';
import ProductItem from './ProductItem';

class ProductsList extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const { products, navigation } = this.props;

    return (
      <Container>
        <Header>
           <Left>
              <Button
              style={styles.leftMenuButton}
              transparent onPress={() => navigation.goBack()}
              >
               <Icon name='md-arrow-back' style={styles.headerIcon} />
              </Button>
           </Left>
           <Body>
             <Title>{navigation.state.params.name}</Title>
           </Body>
           <Right>
             <Button style={styles.rightMenuButton} transparent>
               <Icon name='ios-create-outline' style={styles.headerIcon} />
             </Button>
           </Right>
         </Header>
        <Content style={styles.container}>
          {products.length > 0 ? products.map((product, index) => (
            <ProductItem
              key={index}
              index={index}
              name={product.name}
            />
          )) : <Title style={styles.title}>No Items</Title>}
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

const mapStateToProps = state => ({
  lists: state.lists
});

ProductsList.propTypes = {
  lists: PropTypes.array,
  navigation: PropTypes.object
};

export default connect(mapStateToProps)(ProductsList);
