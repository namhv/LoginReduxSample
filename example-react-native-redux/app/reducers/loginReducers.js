import * as types from '../actions/loginActions';

const initialState = {
  loginSize: 1010
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGINFALSE:
      return {
        ...state,
        loginSize: state.loginSize * 2
      };
    case types.LOGINSUCCESS:
      return {
        ...state,
        loginSize: state.loginSize - 1
      };
    default:
      return state;
  }
}
