import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const DayOne = () => {
  return (
    <View>
      <Stack.Screen options={{title : 'Day 1', headerTitleAlign : 'center'}} />
      <Text style = {{fontFamily : 'AmaticBold' , fontSize : 100}} >DayOne Details</Text>
    </View>
  )
}

export default DayOne;