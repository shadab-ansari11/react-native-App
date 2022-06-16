import React from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.TopHadingView}>
        <Text style={styles.HadingText}>Welcome Back!</Text>
      </View>
      <View style={styles.LoginView}>
        <Text style={styles.LoginText}>Login</Text>
        <View style={styles.InputView}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#f7f7f7'}
            autoCapitalize={false}
            autoCorrect={true}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="email-address"
            style={styles.Input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#f7f7f7'}
            secureTextEntry={true}
            textContentType="password"
            style={styles.Input}
          />
          <View style={styles.ButtonView}>
            <Button
              style={styles.loginButton}
              title="Login"
              color="#833471"
              borderRadius={10}
              onPress={() => navigation.navigate('drawer')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 100,
    backgroundColor: '#000',
  },
  TopHadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '55%',
  },
  HadingText: {
    Color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  LoginView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '10%',
  },
  LoginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    width: (windowWidth / 100) * 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 50,
  },
  InputView: {
    marginHorizontal: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: (windowWidth / 100) * 80,
  },
  Input: {
    width: (windowWidth / 100) * 80,
    height: (windowHeight / 100) * 6,
    backgroundColor: 'gray',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  ButtonView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    width: (windowWidth / 100) * 80,
  },
  loginButton: {},
});
