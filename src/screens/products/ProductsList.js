import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Button, Icon, Content, Title, Header, Left, Right, Body } from 'native-base';
import {
  StyleSheet,
} from 'react-native';
import ProductItem from './ProductItem';


class ProductsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.titleList,
    header: null,
  });

  constructor(props){
    super(props);

    this.productsList = this.props.lists[this.props.navigation.state.params.indexList].products;
  }


  render() {
    return (
      <Container>
        <Header>
           <Left>
             <Button style={styles.leftMenuButton} transparent onPress={() => this.props.navigation.navigate('Lists')}>
               <Icon name='md-arrow-back' style={styles.headerIcon}/>
             </Button>
           </Left>
           <Body>
             <Title>{this.props.navigation.state.params.titleList}</Title>
           </Body>
           <Right>
             <Button style={styles.rightMenuButton} transparent>
               <Icon name='ios-create-outline' style={styles.headerIcon}/>
             </Button>
           </Right>
         </Header>
        <Content style={styles.container}>
          {this.productsList.length > 0 ? this.productsList.map((product, productIndex) => (
            <ProductItem
              key={productIndex}
              index={productIndex}
              productName={product.name}
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
}

export default connect(mapStateToProps)(ProductsList);
