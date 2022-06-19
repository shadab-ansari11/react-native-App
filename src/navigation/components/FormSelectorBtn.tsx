import React from 'react'
import { View, Text, Button ,TouchableWithoutFeedback,StyleSheet, Dimensions,Animated} from 'react-native'


export default function FormSelectorBtn({title,backgroundColor,style,}) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <TouchableWithoutFeedback >
           <Animated.View style={[styles.loginView,style,{backgroundColor}]}>
            <Text style={styles.loginText}>{title}</Text>
           </Animated.View>
        </TouchableWithoutFeedback>
     </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    loginView:{
        width: (windowWidth / 100) * 45,
        height:45,
          justifyContent:'center',
          alignItems:'center'
       },
       loginText:{
        color:'#fff',
        fontSize:16,
       },
     
})
