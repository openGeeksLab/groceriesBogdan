import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Title, Content } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import ProductItem from './ProductItem';


class ProductsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.titleList,
    headerBackTitle: null
  });

  constructor(props){
    super(props);

    this.productsList = this.props.listsData[this.props.navigation.state.params.indexList].products;
  }


  render() {
    return (
      <Container>
        <ScrollView>
          {this.productsList.map((product, productIndex) => (
            <ProductItem
              key={productIndex}
              index={productIndex}
              productName={product.name}
            />
          ))}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listsData: state.listsReducer
});

export default connect(mapStateToProps)(ProductsList);
