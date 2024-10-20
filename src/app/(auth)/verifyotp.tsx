import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Verifyotp = () => {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View style={Styles.container}>
          <Text>Verify OTP</Text>
        </View>
    </SafeAreaView>
  )
}

export default Verifyotp

const Styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})