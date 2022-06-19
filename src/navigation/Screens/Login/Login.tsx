import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, ScrollView } from 'react-native'
import FormHeader from '../../components/FormHeader'
import FormSelectorBtn from '../../components/FormSelectorBtn'
import LoginFrom from '../../components/LoginFrom'
import SingUpFrom from '../../components/SignUpFrom'


export default function Login() {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <View >
        <FormHeader leftheading='Welcom' rightheading="Back" subheading="Shadab Ansari" />
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 30, marginBottom:20, justifyContent: 'center', alignItems: 'center' }}>
        <FormSelectorBtn title='Login' backgroundColor="#006BA6" style={styles.borderLeft} />
        <FormSelectorBtn title='Sign Up' backgroundColor="#0496FF" style={styles.borderRight} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled>
        <LoginFrom />
        <SingUpFrom />
      </ScrollView>
    </View>
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