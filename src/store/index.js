import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const logger = createLogger();


// DEV
const middlwares = composeWithDevTools(
  applyMiddleware(
    logger
  ),
);

const store = createStore(
  reducers,
  middlwares,
);


persistStore(store, null, { storage: AsyncStorage });

export default store;
