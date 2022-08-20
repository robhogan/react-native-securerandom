/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { useState, useCallback } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { generateSecureRandom } from 'react-native-securerandom';

const App = () => {
  const [randomBytes, setRandomBytes] = useState();

  const moreRandom = useCallback(() => {
    generateSecureRandom(5).then(setRandomBytes);
  }, [])

  return (
      <View style={styles.container}>
        { randomBytes ? <Text>{[...randomBytes].map(b => b.toString(16)).join(',')}</Text>
            : <Text>Press the button for something random</Text> }
        <Button title="Make some random" onPress={moreRandom} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
