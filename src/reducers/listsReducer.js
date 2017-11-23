import { ADD_LIST, DELETE_LIST} from '../actions';

const initialState = [
  {
    listName: 'First List', // name
    listId: 0, // id
    products: [
      {
        id: 0,
        name: "First Product",
        isBuy: false
      },
      {
        id: 1,
        name: "Second Product",
        isBuy: false
      },
      {
        id: 2,
        name: "Third Product",
        isBuy: false
      }
    ]
  },
  {
    listName: 'Groceries',
    listId: 1,
    products: [
      {
        id: 0,
        name: "Milk",
        isBuy: false
      },
      {
        id: 1,
        name: "Bread",
        isBuy: false
      },
      {
        id: 2,
        name: "Sprite",
        isBuy: false
      }
    ]
  },
  {
    listName: 'Gifts',
    listId: 2,
    products: []
  }
];


const listsReducer = (state=initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, {
        listName: action.listName,
        listId: action.listId,
        products: []
      }]
    case DELETE_LIST: {
      const newState = [...state];
      newState.splice(action.listId, 1); // USE [].filter instead of [].splice
      return newState
    }
    default:
      return state;
  }
}

export default listsReducer;
