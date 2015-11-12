import * as types from './actionTypes';

export function loginFalse() {
  return {
    type: types.LOGINFALSE
  };
}

export function loginSuccess() {
  return {
    type: types.LOGINSUCCESS
  };
}
