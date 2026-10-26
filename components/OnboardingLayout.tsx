import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { OnboardingLayoutProps } from '../types/onboarding';
import PrimaryButton from './ui/PrimaryButton';
import TextButton from './ui/TextButton';

export default function OnboardingLayout({
 title,
 description,
 image,
 onGetStarted,
 onSkip,
}: OnboardingLayoutProps) {
 return (
  <SafeAreaView className="flex-1 bg-white">
   <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
   >
    <View className="flex-1 justify-between px-6 pt-6 pb-6">
     <View className="mt-2">
      {title.map((line, index) => (
       <Text
        key={`${line} -${index} `}
        className="text-5xl font-bold leading-tight text-[#0B1E3D]"
       >
        {line}
       </Text>
      ))}

      <Text className="mt-3 text-2xl leading-tight text-[#7189AB]">
       {description}
      </Text>
     </View>

     <View className="my-6 flex-1 items-center justify-center">
      <Image
       source={image}
       resizeMode="contain"
       className="h-2/3 w-full"
      />
     </View>

     <View className="w-full">
      <PrimaryButton title="Get Started" onPress={onGetStarted} />
      <TextButton title="Skip" onPress={onSkip} />
     </View>
    </View>
   </ScrollView>
  </SafeAreaView>
 );
}