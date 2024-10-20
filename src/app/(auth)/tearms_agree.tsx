import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constant/imagePath'
import Colors from '@/src/constant/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComponents from '@/src/components/atoms/ButtonComponents'
import { router } from 'expo-router'

const TearmsAgree = () => {

  const onAgree = ()=>{
      //alert("Button pressed")
      router.push("/(auth)/loginpage")
  } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerDiv}>
        <Text style={styles.headerText}>Welocme to the whatsapp</Text>
        <Image style={styles.image} source={imagePath.whatsapplogo} resizeMode='contain'/>    
        <Text style={styles.desctext}>Read our <Text style={{color:"#0c42cc"}}>privacy Policy</Text>. Tap " Agree and Continue" to accept the <Text style={{color:"#0c42cc"}}>tearms of services</Text>.</Text>      
        <View style={{width:moderateScale(300)}}>
           <ButtonComponents titletext="Agree and Continue" onPress={onAgree}/>
        </View>
      </View>
      
      <View style={styles.footerDiv}>
        <Text style={styles.fromtext}>From</Text>
        <Text style={styles.facebootext}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

export default TearmsAgree

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:Colors.white,
    paddingVertical:verticalScale(60),
    paddingHorizontal:scale(35),
    
  },

  image:{
    width:scale(200),
    height:verticalScale(200),
  },
  headerDiv:{
    alignItems:"center",
    justifyContent:"center",
    gap:verticalScale(20)
  },
  headerText:{
    fontSize:moderateScale(22),
    fontWeight:"bold"
  },
  footerDiv:{
    alignItems:"center",
    justifyContent:"center",
  },
  fromtext:{
    fontSize:moderateScale(14),
    color:Colors.fromcolor,
    fontWeight:"bold"
  },
  facebootext:{
      fontSize:moderateScale(20),
      color:Colors.black
  },
  btncontainer:{

  },
  desctext:{
    textAlign:"center",
    fontSize:moderateScale(14),
    color:Colors.black,
    marginBottom:verticalScale(10)
  },
  btntext:{

  }
  

})