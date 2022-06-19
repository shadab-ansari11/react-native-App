import React from 'react'
import { View, Text,Dimensions,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FromContainer from './FormContainer'


export default function FormInput({placeholder,title}) {
  return ( 
    <>
      <Text style={styles.labelText}>{title}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
      
    </>
   
  )
}

const styles = StyleSheet.create({
    labelText:{
        fontWeight: 'bold',
        color: '#000'
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        height:35,
        borderRadius:8,
        fontSize:16,
        paddingLeft:10,
        marginBottom:20

    },
})