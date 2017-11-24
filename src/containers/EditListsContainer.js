import { connect } from 'react-redux';
import EditLists from '../screens/lists/EditLists';
import { deleteList } from '../actions';

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps, { deleteList })(EditLists);
