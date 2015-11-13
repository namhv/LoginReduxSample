import * as actions from '../actions/loginActionTypes';

const initialState = {
  loginSize: 1010
};

export default function loginControl(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGINFALSE:
      return {
        ...state,
        loginSize: state.loginSize + 2
      };
    case actions.LOGINSUCCESS:
      return {
        ...state,
        loginSize: state.loginSize - 2
      };
    default:
      return state;
  }
}
