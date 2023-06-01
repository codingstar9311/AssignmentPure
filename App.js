/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from './src/common/Icons';

const App = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <AntDesign name='up' style={{ marginTop: 200 }} />
    </View>
  )
}
export default App;
