import React from 'react'
import { View, Text, Button } from 'react-native'


export default function Home({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Home</Text>
        {/* <Button title='goto home' onPress={()=> navigation.navigate('drawer')} /> */}
    </View>
  )
}
