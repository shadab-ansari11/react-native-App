
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Dimensions } from 'react-native';

export interface Buttonprops{
    onPress: () => void;
}

function  ButtonIndex(props:Buttonprops){
    const {onPress} = props; 
    return (
      <>
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
      </>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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
});

//make this component available to the app
export default ButtonIndex;
