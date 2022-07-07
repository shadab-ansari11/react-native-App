import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import FromContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitbtn from './FormSubmitbtn'
import { Formik } from 'formik';
import * as Yup from 'yup';

export interface SingUpFromPrpos {

}

export default function SingUpFrom(P: SingUpFromPrpos) {


    return (
        <FromContainer>

            <>
                <FormInput
                    title="Full Name"
                    placeholder="Shadab Ansari"
                />

                <FormInput
                    title="Email"
                    placeholder="example@gmail.com"
                />

                <FormInput
                    title="Password"
                    placeholder="***********"
                />

                <FormInput
                    title="Confirm Password"
                    placeholder="***********"
                />

                <FormSubmitbtn title="Submit" />
            </>




        </FromContainer>
    )
}

const styles = StyleSheet.create({

})