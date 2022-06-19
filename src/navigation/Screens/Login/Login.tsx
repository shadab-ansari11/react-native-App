import React, { useRef } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native'
import FormHeader from '../../components/FormHeader'
import FormSelectorBtn from '../../components/FormSelectorBtn'
import LoginFrom from '../../components/LoginFrom'
import SingUpFrom from '../../components/SignUpFrom'


export default function Login() {
  const { width } = Dimensions.get('window')
  const animated = useRef(new Animated.Value(0)).current

  const rightHeaderOpactiya = animated.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const rightHeaderTranslteY = animated.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const leftHeaderTranslteX = animated.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });

  const loginColorinterpolate = animated.interpolate({
    inputRange: [0, width],
    outputRange: ['#006BA6', '#0496FF'],
  });

  const SignUpColorinterpolate = animated.interpolate({
    inputRange: [0, width],
    outputRange: ['#0496FF', '#006BA6'],
  });
  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
      <View>
        <FormHeader
          leftheading='Welcom'
          rightheading="Back"
          subheading="Shadab Ansari"
          rightHeaderOpactiya={rightHeaderOpactiya}
          leftHeaderTranslteX={leftHeaderTranslteX}
          rightHeaderTranslteY={rightHeaderTranslteY}

        />
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 30, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
        <FormSelectorBtn title='Login' backgroundColor={loginColorinterpolate} style={styles.borderLeft} />
        <FormSelectorBtn title='Sign Up' backgroundColor={SignUpColorinterpolate} style={styles.borderRight} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal
        pagingEnabled onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: animated } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}>
        <LoginFrom />
        <ScrollView>
          <SingUpFrom />
        </ScrollView>
      </ScrollView>
    </View >
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
})