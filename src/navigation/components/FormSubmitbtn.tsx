import React from 'react'
import { View, Text,Dimensions,StyleSheet ,TouchableOpacity,GestureResponderEvent} from 'react-native'

export interface FormSubmitbtnPrpos {
title: string;
onPress?: () => void;

}
export default function FormSubmitbtn(p:FormSubmitbtnPrpos) {
  return (
   <>
  <TouchableOpacity style={styles.container} onPress={p.onPress}>
    <Text style={styles.SubmitbtnText}>{p.title}</Text>
   </TouchableOpacity>
   </>
  )
}

const styles = StyleSheet.create({
    container:{
    height:45,
    backgroundColor:'#006BA6',
    borderRadius:8,
    justifyContent: 'center',
    alignItems:'center',
    },
    SubmitbtnText:{
        color: '#fff',
        fontSize:18,
    }
})