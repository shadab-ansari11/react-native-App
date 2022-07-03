import React from 'react'
import { View, Text,Dimensions,StyleSheet ,TouchableOpacity} from 'react-native'


export default function FormSubmitbtn({title,onPress}) {
  return (
   <>
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.SubmitbtnText}>{title}</Text>
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