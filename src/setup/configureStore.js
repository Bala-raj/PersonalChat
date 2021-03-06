import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './root-reducer';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

  const store = createStore(rootReducer, composeWithDevTools(composeEnhancers(applyMiddleware(sagaMiddleware))));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
