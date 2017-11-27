import { combineReducers } from 'redux';

import listsReducer from './listsReducer';
import settingsReducer from './settingsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  lists: listsReducer,
  settings: settingsReducer,
  filter: filterReducer
});
