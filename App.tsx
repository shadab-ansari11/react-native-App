import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStack from './src/RootStack';



export default function App() {
  return (
   <View style={{flex:1}}>
    <RootStack />
   </View>
  );
}
