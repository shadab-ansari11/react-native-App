import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Feeds from './Screens/Feeds';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation screenOptions={{
      headerShown: false,
    }} >
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false,}} />
      <Drawer.Screen name="feed" component={Feeds} />
    </Drawer.Navigator>
  );
}

export default function DrawerStack() {
  return (
    
      <MyDrawer />
    
  );
}
