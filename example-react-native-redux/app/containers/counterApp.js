'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counterView';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux/native';

@connect(state => ({
  state: state.counter
}))

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Counter
        counter={state.count}
        {...bindActionCreators(counterActions, dispatch)} />
    );
  }
}
