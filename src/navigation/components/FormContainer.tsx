import React from 'react'
import { View, Text, Dimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'


export default function FromContainer({ children }) {
    return (
        <KeyboardAvoidingView
            enabled
            behavior={Platform.OS === 'ios' ? "padding": null }
            style={styles.maincontainer}>
            {children}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20
    }
})