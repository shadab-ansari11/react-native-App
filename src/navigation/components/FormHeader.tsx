import React from 'react'
import { View, Text, Button, StyleSheet, Animated } from 'react-native'


export default function FormHeader({
    leftheading,
    rightheading,
    subheading,
    leftHeaderTranslteX = 0,
    rightHeaderTranslteY = -20,
    rightHeaderOpactiya = 0,
}) {
    return (
        <View style={styles.maincontainer}>
            <View style={{ flexDirection: 'row' }}>
                <Animated.Text
                    style={[styles.heading, { transform: [{ translateX: leftHeaderTranslteX }] }]}>
                    {leftheading}
                </Animated.Text>
                <Animated.Text style={[styles.heading, {
                    opacity: rightHeaderOpactiya,
                    transform: [{ translateY: rightHeaderTranslteY }]
                }]}>
                    {rightheading}
                </Animated.Text>
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
