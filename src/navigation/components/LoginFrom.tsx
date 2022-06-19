import React from 'react'
import { View, Text,Dimensions,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'



export default function LoginFrom() {
  return (
    <FromContainer >
      <FormInput title="Email" placeholder="example@gmail.com"/>
      <FormInput title="Password" placeholder="***********"/>
       <FormSubmitbtn  title="Login" />
    </FromContainer>
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
        paddingLeft:10
    },
})