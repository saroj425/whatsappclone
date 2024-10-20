import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Rootlayout = () => {
    const [isLogin,setIslogin] = useState(false);


    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hideAsync()
        },5000)
    })
  return (
    <>
        <Stack screenOptions={{headerShown:false}}/>
        {
            isLogin ? (<Redirect href={"/(main)"}/>):(<Redirect href={"/(auth)"}/>)
        }
    </>
  )
}

export default Rootlayout