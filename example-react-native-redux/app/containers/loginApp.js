'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Login from '../components/login';
import * as loginActions from '../actions/loginActions';
import { connect } from 'react-redux/native';

@connect(state => ({
  state: state.login
}))
class LoginApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Login
        login={state.loginSize}
        {...bindActionCreators(loginActions, dispatch)} />
    );
  }
}

export default LoginApp;
