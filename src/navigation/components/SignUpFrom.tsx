import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isValidObjField,updateError,isValidEmail } from './ulits/methads'

export default function SingUpFrom() {

    const [userInfo, setUserInfo] = useState({
        fullname: '',
        email: '',
        password: '',
        ConfirmPassword: '',
    })
    const [error, setError] = useState();
    const { fullname, email, password, ConfirmPassword } = userInfo;
    const handleOnchangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    };

    const isValidForm = () => {
        if (!isValidObjField(userInfo)) return updateError('Required all fields!', setError)
        if (!fullname.trim() || fullname.length < 3) return updateError('Invalid name!', setError)

        if (!isValidEmail(email)) return updateError('Invalid email!', setError)

        if (!password.trim() || password.length < 8) return updateError('Password less then 8 characters!', setError)
        if (password !== ConfirmPassword) return updateError('Password dose not match', setError)
        return true
    }

    const submitForm = () => {
        if (isValidForm()) {
            console.log("userinfo", userInfo)
        }
    }
    return (
        <FromContainer>
            {error ? <Text style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>{error}</Text> : null  }
            <Formik >
                {() => {
                    return (
                        <>
                            <FormInput
                                title="Full Name"
                                placeholder="Shadab Ansari"
                                Value={fullname}
                                onChangeText={(value) => handleOnchangeText(value, 'fullname')}
                            />

                            <FormInput
                                title="Email"
                                placeholder="example@gmail.com"
                                Value={email}
                                onChangeText={(value) => handleOnchangeText(value, 'email')}
                            />

                            <FormInput
                                title="Password"
                                placeholder="***********"
                                secureTextEntry
                                Value={password}
                                onChangeText={(value) => handleOnchangeText(value, 'password')}
                            />

                            <FormInput
                                title="Confirm Password"
                                placeholder="***********"
                                secureTextEntry
                                Value={ConfirmPassword}
                                onChangeText={(value) => handleOnchangeText(value, 'ConfirmPassword')}
                            />

                            <FormSubmitbtn onPress={submitForm} title="Submit" />
                        </>
                    )
                }}
            </Formik>

        </FromContainer>
    )
}

const styles = StyleSheet.create({

})