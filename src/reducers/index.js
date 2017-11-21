import { combineReducers } from 'redux';

import listsReducer from './listsReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  listsReducer,
  settingsReducer
});
