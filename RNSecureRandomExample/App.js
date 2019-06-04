/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {generateSecureRandom} from 'react-native-securerandom';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
type State = {
  randomBytes?: Uint8Array
};
export default class App extends Component<Props, State> {
  state = {};

  async moreRandom() {
    const randomBytes = await generateSecureRandom(8);
    this.setState({ randomBytes });
  }

  render() {
    const { randomBytes } = this.state;
    return (
      <View style={styles.container}>
        { randomBytes ? <Text>{[...randomBytes].map(b => b.toString(16)).join(',')}</Text>
            : <Text>Press the button for something random</Text> }
        <Button title="Make some random" onPress={this.moreRandom.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
