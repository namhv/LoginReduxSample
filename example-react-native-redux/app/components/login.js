'use strict';

import React, {
  AppRegistry,
  Component,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    count: {
        backgroundColor: '#FFF',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 40,
        height: 40
    },
    inputUsername: {
      marginLeft: 15,
      width: 40,
      height: 40
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 80,
        top: 12,
        right: 0,
        height: 40,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    pinkFont: {
      color: '#FF3366'
    },
    whiteFont: {
      color: '#FFF'
    }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { login, loginFalse, loginSuccess } = this.props;

    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                    <TextInput 
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FF3366"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#FF3366"
                    />
                </View>
            </View>
            <View style={styles.count}>
                <Text style={styles.pinkFont}>{login}</Text>
            </View>
            <View style={styles.signin}>
                <Text style={styles.whiteFont} onPress={loginSuccess}>Sign In</Text>
            </View>
        </View>
    );
  }
}