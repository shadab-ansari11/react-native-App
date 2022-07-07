import React from 'react'
import { View, Text, Dimensions, StyleSheet,TextInput } from 'react-native'
import FromContainer from './FormContainer'

export interface SingUpFromProps {
  placeholder: string;
  title: string;
  error: string;
  onChangeText: (text: string) => void

}

const FormInput = (Props: SingUpFromProps) => {
  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
        <Text style={styles.labelText}>{Props.title}</Text>        
      </View>
      <TextInput
       autoCapitalize="none"
        style={[styles.input,{borderColor:Props.error?'red':'black'}]}
        placeholderTextColor="black"
        onChangeText={Props.onChangeText}        
        placeholder={Props.placeholder} 
       
         />
    </>

  )
}

const styles = StyleSheet.create({
  labelText: {
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    // height:40,
    borderRadius: 8,
    fontSize: 10,
    paddingLeft: 10,
    marginBottom: 20,
    paddingVertical: 5

  },
})

export default FormInput;