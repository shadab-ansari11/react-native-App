import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import Login from './Screens/Login/Login';
import Signup from './Screens/Login/Signup';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
         <Stack.Screen name="login" component={Login} />
         <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="drawer" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
