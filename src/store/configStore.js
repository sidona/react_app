/**
 * Created by Sidona on 4/1/2017.
 */

import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,reduxImmutableStateInvariant())
  );
}
