import React from 'react';
import { connect } from 'react-redux';
import EditLists from '../screens/lists/EditLists';
import { deleteList } from '../actions';

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  onDelete: listId => dispatch(deleteList(listId))
});

const EditListsContainer = connect(mapStateToProps, mapDispatchToProps)(EditLists);

export default EditListsContainer;
