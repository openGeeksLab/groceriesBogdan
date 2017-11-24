import { connect } from 'react-redux';
import AddNewList from '../screens/lists/AddNewList';
import { addList } from '../actions';

export default connect(null, { addList })(AddNewList);
