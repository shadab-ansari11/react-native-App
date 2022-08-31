import React from 'react'
import { View, Text, Button, ImageBackground, Dimensions,StyleSheet } from 'react-native'


export default function Home({ navigation }) {
  return (
   <>
   <ImageBackground source={require('../../assets/mainImg.png')} style={styles.backgroundIMG}>
   <View style={{ flex: 1, }}>
      <Text>Home</Text>
    </View>
   </ImageBackground>
   </>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  backgroundIMG: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 100,
  },
})
