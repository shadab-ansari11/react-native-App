import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import Login from './Screens/Auth/Login/Index';
import Home from './Screens/Home';
import SplashScreen from './components/SplashScreen';


const Stack = createNativeStackNavigator();
export type RootStackParam = {
  Login: undefined;
  Home: undefined;
  Drawer: undefined;
  SplashScreen: undefined;
};
function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
