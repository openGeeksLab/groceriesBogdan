import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Filter from '../screens/Filter';

const mapStateToProps = (state) => ({
    activeFilter: state.filter
});

export default connect(mapStateToProps, { setFilter })(Filter);
