import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  Icon,
  Content,
  Title,
  Header,
  Left,
  Footer,
  Right,
  Body } from 'native-base';
import {
  StyleSheet,
} from 'react-native';
import ProductItem from './ProductItem';
import FilterContainer from '../../containers/FilterContainer';

class ProductsList extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const { products, filter, navigation } = this.props;

    const renderProducts = () => {
      if (products.length > 0) {
        if (filter === 'CART') {
          return (
            products.filter(product => !product.isBuy).map((product, index) => (
              <ProductItem
                key={index}
                index={index}
                name={product.name}
              />
            ))
          );
        } else {
          return (
            products.map((product, index) => (
              <ProductItem
                key={index}
                index={index}
                name={product.name}
              />
            ))
          );
        }
      } else {
        return (
          <Title style={styles.title}>No Items</Title>
        );
      }
    };

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
          {renderProducts()}
        </Content>
        <Footer style={styles.footer}>
          <FilterContainer />
        </Footer>
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
  },
  footer: {
    // borderTopWidth: 1,
    // borderTopColor: 'black' 
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
