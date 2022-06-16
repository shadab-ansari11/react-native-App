import React from 'react'
import { View, Text, Button } from 'react-native'


export default function Feeds({navigation}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>feeds</Text>
        {/* <Button title='goto home' onPress={()=> navigation.navigate('drawer')} /> */}
    </View>
  )
}
