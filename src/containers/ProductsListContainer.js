import { connect } from 'react-redux';
import ProductsList from '../screens/products/ProductsList';

const mapStateToProps = (state, props) => ({
  products: state.lists[props.navigation.state.params.index].products || [],
  filter: state.filter
});

export default connect(mapStateToProps)(ProductsList);
