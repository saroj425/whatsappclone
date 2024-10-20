import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import Colors from '@/src/constant/Colors'

const ButtonComponents = ({titletext,onPress,style}:any) => {
  return (
    <TouchableOpacity style={[styles.btnContainer,style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.btnText}>{titletext}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponents

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:"#00A884",
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(20),
        borderRadius:5,   
        alignItems:"center",  
    },
    btnText:{
        color:Colors.white,
        fontSize:scale(15),
        textTransform:"uppercase",
        
    }
})