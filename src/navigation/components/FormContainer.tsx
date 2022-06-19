import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'


export default function FromContainer({ children }) {
    return (
        <View style={styles.maincontainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
       width: Dimensions.get('window').width,
       paddingHorizontal: 20
    }
})