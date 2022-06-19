import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'


export default function SingUpFrom() {
    return (
        <FromContainer>
            <FormInput title="Full Name" placeholder="Shadab Ansari" />
            <FormInput title="Email" placeholder="example@gmail.com" />
            <FormInput title="Password" placeholder="***********" />
            <FormInput title="Confirm Password" placeholder="***********" />
            <FormSubmitbtn title="Submit" />
        </FromContainer>
    )
}

const styles = StyleSheet.create({

})