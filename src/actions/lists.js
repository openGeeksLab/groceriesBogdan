export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
const uuidv4 = require('uuid/v4');

export const addList = (name) => ({
  type: ADD_LIST,
  name,
  id: uuidv4()
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
  id
});
