/**
 * Created by Sidona on 4/1/2017.
 */
import {combineReducers} from 'redux';
import course from './courseReducer';
import authors from './authorReducer';

const rootReducer=combineReducers({
  course,
  authors
});

export default rootReducer;
