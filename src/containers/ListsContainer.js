import { connect } from 'react-redux';
import Lists from '../screens/lists/Lists';

const mapStateToProps = state => ({
  lists: state.lists
});

const ListsContainer = connect(mapStateToProps)(Lists);

export default ListsContainer;
//see AddNewListContainer comment