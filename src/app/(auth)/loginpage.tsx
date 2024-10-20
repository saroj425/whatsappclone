import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '@/src/constant/Colors'
import ButtonComponents from '@/src/components/atoms/ButtonComponents'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const Loginpage = () => {
  const [visible, setVisible] = useState(false)
  const [countryCode, setCountryCode] = useState('91') // Default country code for India
  const [countryName, setCountryName] = useState('India') // Default country name
  const [callingCode, setCallingCode] = useState('91') // Default calling code for India
  
  const onNextbtnclick = () => {
    router.push("/(auth)/verifyotp")
  }

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2)
    setCountryName(country.name)
    setCallingCode(country.callingCode[0])
    setVisible(false) // Close picker after selecting country
  }

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={Styles.infocontainer}>
            <Text style={Styles.heading}>Enter your phone number</Text>
            <Text style={Styles.description}>
              WhatsApp will need to verify your phone number.{' '}
              <Text style={Styles.linkdescription}>What's my number?</Text>
            </Text>
          </View>
          <View style={Styles.inputcontainer}>
            <TouchableOpacity style={Styles.dropdowncontainer} onPress={() => setVisible(true)}>
              <View />
              
              <Text style={Styles.dropdowntitle}>{countryName}</Text>
              <AntDesign name="caretdown" size={moderateScale(15)} color="black" />
            </TouchableOpacity>
            <View style={Styles.horizontalline}></View>
            <View style={Styles.inputdiv}>
              <View style={Styles.countrycode}>
                <Text style={Styles.countrytext}>+ {countryCode}</Text>
                <View style={Styles.horizontalline}></View>
              </View>
              <View style={Styles.inputfield}>
                <TextInput style={Styles.inputfield} keyboardType="phone-pad" />
                <View style={Styles.horizontalline}></View>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.footer}>
          <Text>
            <ButtonComponents titletext="Next" onPress={onNextbtnclick} style={{ paddingHorizontal: scale(20) }} />
          </Text>
        </View>        
      </View>
      {
        visible && (
          <CountryPicker
                  visible={visible}
                  withFilter // Show the search bar inside the country picker                  
                  withModal // Display it as a modal
                  withFlag
                  onSelect={(e:any)=>{
                    setCountryCode(`${e.callingCode[0]}`);
                    setCountryName(e.name)
                  }}
                  onClose={() => setVisible(false)}
                  
                />
        )
      }
    </SafeAreaView>
  )
}

export default Loginpage

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    paddingHorizontal: scale(30)
  },
  header: {
    gap: verticalScale(50)
  },
  infocontainer: {
    gap: verticalScale(20)
  },
  heading: {
    fontSize: moderateScale(20),
    color: Colors.black,
    fontWeight: "600",
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    color: Colors.grey,
    fontSize: moderateScale(14),
    fontWeight: "400"
  },
  linkdescription: {
    color: Colors.blue
  },
  inputcontainer: {},
  horizontalline: {
    width: "100%",
    height: verticalScale(1.5),
    backgroundColor: "green"
  },
  dropdowncontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(20),
    paddingVertical: scale(10)
  },
  dropdowntitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: Colors.black
  },
  inputdiv: {
    paddingHorizontal: verticalScale(0),
    paddingVertical: scale(10),
    flexDirection: "row",
    gap: scale(20),
    alignItems: "center"
  },
  countrycode: {
    gap: verticalScale(5)
  },
  countrytext: {
    fontSize: moderateScale(17),
    fontWeight: "600",
    color: Colors.black
  },
  inputfield: {
    flex: 1,
    fontSize: moderateScale(17),
    fontWeight: "600",
    color: Colors.black,
    gap: verticalScale(5)
  },
  footer: {}
})
