//import { ADD_LIST } from '../actions';

const initialState = {
  theme: 'White',
  fontSize: 15,
  fontFamily: '',
  alphabeticalSort: false,
  sync: false
};

const settingsReducer = (state=initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default settingsReducer;
