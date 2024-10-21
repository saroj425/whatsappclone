import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import ButtonComponents from '@/src/components/atoms/ButtonComponents'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '@/src/constant/Colors'
import OTPInput from "@codsod/react-native-otp-input";
import { useNavigation } from 'expo-router'

const Verifyotp = () => {
  const [otp, setOTP] = useState("");
  const navigation = useNavigation();

  const onPress = ()=>{
      console.log("OTP===>",otp)
  }

  const sendBack = ()=>{
    navigation.goBack();
  }

  return (
    <SafeAreaView style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity onPress={sendBack} style={Styles.backbtn}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={Styles.headTitle}>Enter OTP Code</Text>
        </View>
        <View style={Styles.body}>
          <Text style={Styles.otpSendText}>Code has been sent to +91 8377972697</Text>
          <OTPInput length={4} onOtpComplete={(txt: string) => setOTP(txt)} inputStyle={Styles.inputstylenew} style={Styles.otpCOntainer}/>
          <Text style={Styles.resendText}>Resend code in <Text style={Styles.countertext}>56 s</Text></Text>
        </View>
        <View style={Styles.footer}>
          <ButtonComponents titletext="Verify" onPress={onPress} style={Styles.verifyButton}/>
        </View>
    </SafeAreaView>
  )
}

export default Verifyotp

const Styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-between",
    padding:moderateScale(20),
    paddingTop:verticalScale(30),

  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(10),
  },
  backbtn:{
    fontSize:moderateScale(24),
    color:Colors.black,
    fontWeight:"600"
  },
  headTitle:{
    fontSize:moderateScale(18),
    color:Colors.black,
    fontWeight:"600"
  },
  body:{
    alignItems:"center",
    gap:verticalScale(25)
  },
  otpSendText:{
    fontSize:moderateScale(16),
    fontWeight:"400"
  },
  inputstylenew:{
    borderColor:Colors.black,
    borderRadius:moderateScale(8)
  },
  otpCOntainer:{
    gap:scale(10)
  },
  resendText:{
    fontSize:moderateScale(15)
  },
  countertext:{
    color:"green"
  },
  footer:{

  },
  verifyButton:{
    borderRadius:moderateScale(30)
  },
})