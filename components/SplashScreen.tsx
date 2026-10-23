import React from 'react';
import {
 View,
 Text,
 ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen() {
 return (
  <View className="flex-1 bg-blue-950">
   <ImageBackground
    source={require('../assets/city-skyline.jpg')}
    resizeMode="cover"
    className="flex-1"
   >
    {/* Blue overlay */}
    <View className="absolute inset-0 bg-blue-950/45" />

    <SafeAreaView className="flex-1">
     <View className="flex-1 items-center">

      {/* CitiBank logo */}
      <View className="mt-80 items-center ">
       <View className="relative items-center">
        <Text className="text-8xl font-bold tracking-tight text-white">
         CitiBank
        </Text>

        {/* Red arc above the logo */}
        <View className="absolute -top-1 left-5 h-3 w-16 rounded-t-full border-t-[3px] border-red-500" />
       </View>

       {/* Tagline */}
       <Text className="mt-5 text-center text-xl font-medium leading-5 text-white">
        Banking for a brighter
        {'\n'}
        tomorrow
       </Text>
      </View>

      {/* Flexible space for the city skyline */}
      <View className="flex-1" />

      {/* Bottom spacing */}
      <View className="mb-3 h-1 w-24 rounded-full bg-white/90" />
     </View>
    </SafeAreaView>
   </ImageBackground>
  </View>
 );
}