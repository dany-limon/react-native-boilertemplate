import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { createLogger } from 'redux-logger'
import * as reducers from '../redux/'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import i18n from '../assets/i18n'

const actions = Actions

const logger = createLogger({
  collapsed: true
})

//Add all reducers to black list
const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: _.map(reducers, (_, key) => key)
}

//Add reducer-properties to white list
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const rootReducer = combineReducers({
  ...reducers,
  auth: persistReducer(authPersistConfig, reducers.auth)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const thunkMiddleware = thunk.withExtraArgument({ actions, i18n })
export const store = __DEV__
  ? createStore(persistedReducer, applyMiddleware(thunkMiddleware, logger))
  : createStore(persistedReducer, applyMiddleware(thunkMiddleware))
export const persistor = persistStore(store, {}, () => {})
