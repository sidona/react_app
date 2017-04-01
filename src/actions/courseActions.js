/**
 * Created by Sidona on 4/1/2017.
 */

import * as types from './actionTypes';

export function createCourse(course) {
  return{type:types.CREATE_COURSE,course};
}
