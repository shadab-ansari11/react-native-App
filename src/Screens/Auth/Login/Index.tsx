import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from "react-native-vector-icons/AntDesign";
import TextField from '../../../components/TextField/Index';
import { ILogin, useLoginForm } from './UseLogin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../../../RootStack';

const initValues: ILogin = {
  email: '',
  password: '',
};

type Props = NativeStackScreenProps<RootStackParam, 'Login'>;

export default function Login(props: Props) {

  const { navigation } = props;
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (values: ILogin) => {
    setLoading(false);
    if (values.email != 'shadab@gmail.com' || values.password != '123') {
      Alert.alert('Please enter your email and password')
    }else{
      navigation.navigate('Home')

    }

    console.log('values-->', values);
  };

  const formik = useLoginForm(onSubmit, initValues);
  const {
    values,
    touched,
    errors,
    isValid,
    handleBlur,
    handleSubmit,
    handleChange,
  } = formik;
  return (
    <>
      <ImageBackground source={require('../../../../assets/backgroundImg/bgImag.jpg')} style={styles.backgroundIMG}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.loginText}>Login Form</Text>
          </View>
          {/* <View style={styles.inputView}> */}
          {/* <Icon
              style={styles.inputIcon}
              name='person'
            /> */}
          <TextField
            // label='email'

            autoComplete="email"
            caretHidden={false}
            placeholder='Username'
            autoCapitalize='none'
            textContentType='emailAddress'
            returnKeyType="next"
            keyboardType="email-address"
            value={values.email}
            error={touched.email ? errors.email : ''}
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}

          />
          {/* </View> */}
          {/* <View style={styles.inputView}>
          <CartIcon
            style={styles.inputIcon}
            name="lock" /> */}
          <TextField
            // label='Password'
            placeholder='Password'
            secureTextEntry={true}
            // autoCapitalize='none'
            error={touched.password ? errors.password : ''}
            autoComplete="password"
            returnKeyType="next"
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
          />
          {/* </View> */}

          <TouchableOpacity>
            <Text style={styles.fpText}>Forgot Password?</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => handleSubmit()}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.registerText}>
              Don't have an account?
              <Text style={{ color: '#5352ed', fontFamily: 'SourceSansProBold' }}>
                {' Register'}
              </Text>
            </Text>
          </View>

        </View>

      </ImageBackground>

    </>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  backgroundIMG: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 100,
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },

  inputView: {
    height: (windowHeight / 100) * 6,
    backgroundColor: '#fff',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  inputIcon: {
    paddingHorizontal: 8,
    fontSize: 20
  },
  input: {
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 70,
    fontFamily: 'SourceSansProRegular',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 0

  },

  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 25,
    width: (windowWidth / 100) * 70,

  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    alignSelf: 'center',
    fontSize: 18,
  },
  fpText: {
    marginTop: 20,
    // alignSelf: 'flex-end',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: '#5352ed',
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
  },
  loginText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'SourceSansProBold',
  }

})