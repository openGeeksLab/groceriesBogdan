import { ADD_LIST, DELETE_LIST } from '../actions';

const initialState = [
  {
    name: 'First List',
    id: 0,
    products: [
      {
        id: 0,
        name: 'First Product',
        isBuy: false
      },
      {
        id: 1,
        name: 'Second Product',
        isBuy: false
      },
      {
        id: 2,
        name: 'Third Product',
        isBuy: false
      }
    ]
  },
  {
    name: 'Groceries',
    id: 1,
    products: [
      {
        id: 0,
        name: 'Milk',
        isBuy: false
      },
      {
        id: 1,
        name: 'Bread',
        isBuy: false
      },
      {
        id: 2,
        name: 'Sprite',
        isBuy: false
      }
    ]
  },
  {
    name: 'Gifts',
    id: 2,
    products: []
  }
];


const listsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, {
        name: action.name,
        id: action.id,
        products: []
      }];

    case DELETE_LIST: {
      return state.filter(item => item.id !== action.id);
    }

    default:
      return state;
  }
};

export default listsReducer;
