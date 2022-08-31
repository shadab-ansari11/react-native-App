import React from "react";
import { ImageBackground, Text } from "react-native";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Login");
  }, 3000);

  return (
    <ImageBackground resizeMode="stretch" source={require('../../assets/SplashScreen/SplashScreen.png')}style={{ flex: 1 }}>
    </ImageBackground>
  );
};

export default SplashScreen;
