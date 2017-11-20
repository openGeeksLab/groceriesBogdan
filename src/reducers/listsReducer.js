import { ADD_LIST } from '../actions';

const initialState = [
  {
    listName: 'First List',
    listId: 1,
    products: []
  },
  {
    listName: 'Second List',
    listId: 2,
    products: []
  },
  {
    listName: 'Third List',
    listId: 3,
    products: []
  }
];

let nextId = 4;

const listsReducer = (state=initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST: {
      const listName = action.listName;

      return [...state, {
        listName,
        listId: nextId++,
        products: []
      }]
    }
    default:
      return state;
  }
}

export default listsReducer;
