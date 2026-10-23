import React from 'react';
import {
 View,
 Text,
 Image,
 Pressable,
 ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingScreenProps } from 'types/onboarding';

export default function OnboardingTwoScreen({ onGetStarted, onSkip }: OnboardingScreenProps) {
 return (
  <SafeAreaView className="flex-1 bg-white">
   <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
   >
    <View className="flex-1 justify-between px-6 pt-6 pb-6">

     {/* Text Header */}
     <View className="mt-2">
      <Text className="text-[32px] font-bold leading-[38px] text-[#0B1E3D]">
       Secure
      </Text>
      <Text className="text-[32px] font-bold leading-[38px] text-[#0B1E3D]">
       & Convenient
      </Text>

      <Text className="mt-3 text-[16px] leading-[24px] text-[#7189AB]">
       Enjoy safe, fast and easy banking anytime, anywhere.
      </Text>
     </View>

     {/* Illustration Container */}
     <View className="my-6 items-center justify-center">
      <Image
       source={require('../assets/security-illustration.png')}
       resizeMode="contain"
       className="h-64 w-full"
      />
     </View>

     {/* Bottom Action Buttons */}
     <View className="w-full">
      <Pressable
       onPress={onGetStarted}
       className="h-[54px] w-full items-center justify-center rounded-full bg-[#0066FF] active:opacity-90"
      >
       <Text className="text-[16px] font-semibold text-white">
        Get Started
       </Text>
      </Pressable>

      <Pressable
       onPress={onSkip}
       className="mt-3 items-center py-2"
      >
       <Text className="text-[15px] font-medium text-[#7189AB]">
        Skip
       </Text>
      </Pressable>
     </View>

    </View>
   </ScrollView>
  </SafeAreaView>
 );
}