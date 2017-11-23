export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

let listNextId = 3;

export const addList = (listName) => ({
  type: ADD_LIST,
  listName,
  listId: listNextId++
})

export const deleteList = (listId) =>({
  type: DELETE_LIST,
  listId
})
