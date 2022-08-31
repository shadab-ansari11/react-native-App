import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import IconComponent from '../IconComponent';
export interface TextFieldprops {
    placeholder?: string;
    textContentType?: string;
    Icons?: boolean;
    leftIcon?: string | undefined;
    secureTextEntry?: boolean;
    label?: string;
    style?: string;
    autoCapitalize?:any;
    keyboardType?: any;
    autoComplete?: string | undefined;
    caretHidden?: boolean;
    returnKeyType?: any;
    error?: boolean;
    value?: string;
    onBlur: (e: any) => void;
    onChangeText: (e: any) => void;
    IconsonPress: () => void;
    IconStyle?:string  
    type?:string; 
  
}

export default function TextField(props: TextFieldprops) {
    const { placeholder, keyboardType, label, returnKeyType, caretHidden, autoComplete, textContentType,
 Icons, leftIcon, secureTextEntry, style, autoCapitalize, error, 
  value, onBlur, onChangeText,IconsonPress,IconStyle,type} = props;

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        label={label}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        returnKeyType={returnKeyType}
                        textContentType='emailAddress'
                        children={undefined} autoComplete={undefined}
                        secureTextEntry={secureTextEntry}
                        error={error}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChangeText}
                        mode='flat'
                        activeUnderlineColor='transparent'
                        left={<TextInput.Icon name={() => <IconComponent IConPress={IconsonPress} IconsName={leftIcon}/>} />} 
                        type={type}
                  />

                </View>
                <Text style={{ color: 'red', }}>{error}</Text>

            </View>
        </>
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },
    inputView: {
        height: (windowHeight / 100) * 6,
        backgroundColor: 'transparent',
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
        marginBottom: 25,
        marginTop: 16,

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