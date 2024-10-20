import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../constant/Colors'
import Icons from '../constant/Icons'

const Home = () => {
  return (
    <View>
      <Text style={{color:Colors.expensecard}}>Home</Text>
      <Image source={Icons.logo} width={20} height={20}/>
    </View>
  )
}

export default Home