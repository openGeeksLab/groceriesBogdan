export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

let listNextId = 3; // use udid() library

export const addList = (listName) => ({
  type: ADD_LIST,
  listName, // use name
  listId: listNextId++ // use id
})

export const deleteList = (listId) =>({
  type: DELETE_LIST,
  listId // use id
})
