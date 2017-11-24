import { connect } from 'react-redux';
import Lists from '../screens/lists/Lists';

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(Lists);
