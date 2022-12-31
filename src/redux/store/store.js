import AsyncStorage from '@react-native-async-storage/async-storage';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

/**
 * Redux Setting
 */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['isLoggedInReducer'],
};

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
// sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export {store, persistor};
