import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Authlayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='/index'/>
        <Stack.Screen name='/tearms_agree'/>
        <Stack.Screen name='/loginpage'/>
        <Stack.Screen name='/verifyotp'/>
    </Stack>
  )
}

export default Authlayout