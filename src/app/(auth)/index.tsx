import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import Colors from '@/src/constant/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from '@/src/constant/Icons'
import imagePath from '@/src/constant/imagePath'
import {scale,verticalScale,moderateScale} from 'react-native-size-matters'

const Auth = () => {
    const [isLoading,setIsloading] = useState(false);

    let navigate_to_welcome = ()=>{
        router.push("/tearms_agree")
    };

    let loading_time_out = ()=>{
        setIsloading(true);
        setTimeout(navigate_to_welcome,2000);
    }

    useEffect(()=>{
        const timeout = setTimeout(loading_time_out,2000);
        return ()=>clearTimeout(timeout);
    },[])

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.body}>
            {/* <Image source={Icons.whatsapplogo} /> */}
            <Image source={imagePath.logo}  style={styles.image} resizeMode='contain'/>
            <Text style={styles.whatsapp_text}>Whatsapp</Text>
        </View>
        <View style={styles.footer}>
            {
                isLoading ? (
                    <>
                        <ActivityIndicator size={moderateScale(40)} color={Colors.whatsappcolor}/>
                        <Text style={styles.loadimg_text}>Loading...</Text>
                    </>
                ) :(
                    <>
                    <Text style={styles.fromtext}>From</Text>
                    <Text style={styles.facebootext}>Facebook</Text>
                </>
                )
            }
        </View>
    </SafeAreaView>
  )
}

export default Auth

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:50,
        backgroundColor:"whitesmoke"
    },
    image:{
        width:scale(70),
        height:verticalScale(70),
    },
    header:{
            // width:40,
            // height:40,
            // backgroundColor:Colors.yellow
    },
    loadimg_text:{
        //color:Colors.black,
        fontSize:verticalScale(15),
        color:Colors.whatsappcolor,
        marginTop:verticalScale(15),
        fontWeight:"600"

    },
    body:{
        alignItems:"center",
        gap:verticalScale(0)
    },
    footer:{      
        alignItems:"center",
        height:verticalScale(80),
        justifyContent:"flex-end"
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
    whatsapp_text:{
        fontSize:moderateScale(25),
        color:Colors.black,
        fontWeight:"600"
    }
})