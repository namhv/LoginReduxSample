import * as types from './loginActionTypes';

export function onLogin(user, password) {
	if (user == "name" && password == "word") {
		return {
    		type: types.LOGINSUCCESS
 		};
	} else {
		return {
		    type: types.LOGINFALSE
		};
	}
}
