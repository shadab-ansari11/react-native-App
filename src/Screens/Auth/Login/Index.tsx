import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import TextField from '../../../components/TextField/Index';
import { ILogin, useLoginForm } from './UseLogin';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../../../RootStack';
import ButtonIndex from '../../../components/Button/ButtonIndex';

const initValues: ILogin =
  // {
  //   email: '',
  //   password: '',
  // };
  __DEV__
    ?
    {
      email: 'shadab@gmail.com',
      password: '11',
    }
    : {
      email: '',
      password: '',
    };

type Props = NativeStackScreenProps<RootStackParam, 'Login'>;
export interface LoginProps{
  navigation:any;
}
export default function Login(props: LoginProps) {
  const { navigation } = props;
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (values: ILogin) => {
    setLoading(false);
    if (values.email != 'shadab@gmail.com' || values.password != '11') {
      Alert.alert('Please enter your email and password')
    } else {
      navigation.navigate('Drawer')
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
  const [IconChange, setChange] = useState(false);
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Forgot Password",
    "coming soon",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <>
      <ImageBackground source={require('../../../../assets/backgroundImg/background.png')} style={styles.backgroundIMG}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.loginText}>Login Form</Text>
          </View>
          <TextField
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
            leftIcon='user'
            IconsonPress={() => false}
          />
          <TextField
            placeholder='Password'
            secureTextEntry={!IconChange}
            error={touched.password && errors.password}
            autoComplete="password"
            returnKeyType="next"
            value={values.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            leftIcon={IconChange ? 'eye' : 'eye-off'}
            IconsonPress={() => setChange(!IconChange)}
            type={IconChange ? 'password' : 'text'}
          />

          <ButtonIndex onPress={handleSubmit} />
          <View>
            <Text style={styles.registerText}>
              Don't have an account?
              <Text style={{ color: 'black', fontFamily: 'SourceSansProBold', fontWeight: 'bold' }}>
                {' Register'}
              </Text>
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.fpText} onPress={()=>createTwoButtonAlert()}>Forgot Password?</Text>
          </TouchableOpacity>
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
    // flex: 1,
    marginTop:'50%'
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
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
    color: '#fff'
  },
  loginText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'SourceSansProBold',
  }

})