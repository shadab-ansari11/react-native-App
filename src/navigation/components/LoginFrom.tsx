import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'
import { isValidObjField,updateError, isValidEmail} from './ulits/methads'


export default function LoginFrom() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',

  })
  const [error, setError] = useState('');

  const { email, password, } = userInfo;


  const handleOnchangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () =>{   
      if (!isValidObjField(userInfo)) 
      return updateError('Required all fields!', setError)

      if (!isValidEmail(email))
       return updateError('Invalid email!', setError)

      if (!password.trim() || password.length < 8) return updateError('Password is too short!', setError) 
      
      return true   
  }


  const submitForm = () => {
   if (isValidForm()) {
    console.log("shadab---->",userInfo)
   }
  }
  return (
    <FromContainer >
      {error ? <Text style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{error}</Text> : null}

      <FormInput
        title="Email"
        placeholder="example@gmail.com"
        Value={email}
        onChangeText={(value) => handleOnchangeText(value, 'email')}
        autoCapitalize='none'
      />

      <FormInput
        title="Password"
        placeholder="***********"
        Value={password}
        onChangeText={(value) => handleOnchangeText(value, 'password')}
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitbtn onPress={submitForm} title="Login" />

    </FromContainer>
  )
}

const styles = StyleSheet.create({
  labelText: {
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10
  },
})