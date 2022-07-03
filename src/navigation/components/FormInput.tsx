import React from 'react'
import { View, Text,Dimensions,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FromContainer from './FormContainer'

export interface SingUpFrom {
}

 const FormInput= props => {
  const {placeholder,title,error,autoCapitalize,  } = props; 
  return ( 
    <>
     <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
     <Text style={styles.labelText}>{title}</Text>
      {/* {error ? <Text style={{ color: 'red', fontSize: 16}}>{error}</Text> : null } */}
      </View>
      <TextInput {...props} autoCapitalize="none"  style={styles.input} placeholderTextColor="black" placeholder={placeholder} />    
    </>
   
  )
}

const styles = StyleSheet.create({
    labelText:{
        fontWeight: 'bold',
        color: '#000',
    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        // height:40,
        borderRadius:8,
        fontSize:10,
        paddingLeft:10,
        marginBottom:20,
        paddingVertical:5

    },
})

export default FormInput;