import { connect } from 'react-redux';
import AddNewList from '../screens/lists/AddNewList';
import { addList } from '../actions';


const mapDispatchToProps = dispatch => ({
  onAdd: listName => dispatch(addList(listName))
});

const AddNewListContainer = connect(null, mapDispatchToProps)(AddNewList);

export default AddNewListContainer;
// kiss (keep it simple, studip)
// export default connect(null, mapDispatchToProps)(AddNewList);
// instead mapDispatchToProps use
// connect(null, { addList })(AddNewList)

