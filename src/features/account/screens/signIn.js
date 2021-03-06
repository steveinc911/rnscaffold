import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  AsyncStorage,
} from 'react-native';

export default  class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in hello',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
// More code like OtherScreen omitted for brevity