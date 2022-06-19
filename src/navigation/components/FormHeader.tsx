import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


export default function FormHeader({leftheading,rightheading,subheading}) {
    return (
        <View style={styles.maincontainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.heading}>{leftheading}</Text>
                <Text style={styles.heading}>{rightheading}</Text>
            </View>
            <Text style={styles.subheading}>{subheading}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    maincontainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1b1b33',
    },
    subheading: {
        fontSize: 18,
        color: '#1b1b33',
        textAlign: 'center',
    },
})
