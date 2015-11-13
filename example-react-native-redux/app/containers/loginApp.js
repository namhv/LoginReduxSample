'use strict';

import React, { 
  AppRegistry,
  Component,
  StyleSheet,
  Navigator 
} from 'react-native';

import {bindActionCreators} from 'redux';
import Login from '../components/loginView';
import Counter from '../components/counterView';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux/native';

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

@connect(state => ({
  state: state.counter
}))

export default class LoginApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        style={styles.navigationContainer}
        initialRoute={{id: 'Login', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Login') {
      return (
        <Login
          navigator={navigator} />
      );
    }
    if (routeId === 'Counter') {
      const { state, dispatch } = this.props;
      return (
        <Counter
            counter={state.count}
            {...bindActionCreators(counterActions, dispatch)}
            navigator={navigator} />
      );
    }
  }
}

AppRegistry.registerComponent('LoginReduxSample', () => App);
