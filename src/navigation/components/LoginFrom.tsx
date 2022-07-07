import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native'
export interface LoginFromPrpos {

}
type ILogin = {
  email: string;
  password: string;
}
export default function LoginFrom(P: LoginFromPrpos) {
  const navigation = useNavigation();
  const schma = Yup.object().shape({
    email: Yup.string()
      .required('email is required'),

    password: Yup.string()
      .required('Password is required'),
  });
  // const onSubmit =  (values: ILogin) => {   
  //   console.log('value-->', JSON.stringify(values, null, 2));
  //     Alert.alert("hit")
  // }

  const { handleSubmit, values, errors, touched,handleChange} = useFormik<ILogin>({
    initialValues: { email: 'shadab@gmail.com', password: '123'  },
    enableReinitialize: true,
    validationSchema: schma,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values: ILogin) =>{
      if(values.email === "shadab@gmail.com" || values.password === "123"){
        Alert.alert("please Enter confirm Your email and password")
      }
      navigation.navigate("Home")
    }
  });
 
  return (
    <FromContainer>
      <FormInput
        title="Email"
        placeholder="example@gmail.com"
        error={touched.email || errors.email}
        value={values.email}
        name="email"
        onChangeText={handleChange('email')}        
      />
      <FormInput
        title="Password"
        placeholder="Password"
        secureTextEntry
        name="password"
        error={touched.password || errors.password}
        value={values.password}
        onChangeText={handleChange('password')}
      />

      <FormSubmitbtn onPress={() => handleSubmit()} title="Login" />

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