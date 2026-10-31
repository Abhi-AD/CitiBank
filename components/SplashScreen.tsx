import { Images } from 'constants/images';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SplashScreen() {
 return (
  <View className="flex-1 bg-blue-950 ">
   {/* City skyline background */}
   <Image
    source={Images.citySkyline}
    resizeMode="cover"
    className="absolute inset-0 h-full w-full"
   />

   {/* Blue overlay */}
   <View className="absolute inset-0 bg-blue-950/75" />

   <SafeAreaView className="flex-1">
    <View className="flex-1 items-center">
     {/* CitiBank logo */}
     <View className="mt-36  items-center">
      <Image
       source={Images.whiteLogo}
       resizeMode="contain"
       className="h-48 w-80"
      />

      {/* Tagline */}
      <Text className="mt-3 text-center text-2xl font-medium leading-10 text-white">
       Banking for a brighter{"\n"}tomorrow
      </Text>
     </View>

     {/* Flexible space */}
     <View className="flex-1" />

     {/* Bottom indicator */}
     <View className="mb-3 h-1 w-24 rounded-full bg-white/90" />
    </View>
   </SafeAreaView>
  </View>
 );
}
