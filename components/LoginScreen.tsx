import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 Pressable,
 ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LoginScreenProps {
 onSignUp?: () => void;
 onForgotPassword?: () => void;
 onLoginSuccess?: () => void;
}

export default function LoginScreen({
 onSignUp,
 onForgotPassword,
 onLoginSuccess,
}: LoginScreenProps) {
 const [emailOrPhone, setEmailOrPhone] = useState('');
 const [password, setPassword] = useState('');

 return (
  <SafeAreaView className="flex-1 bg-[#001D4A]">
   <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    bounces={false}
   >
    <View className="flex-1 justify-between px-6 pt-10 pb-6">

     {/* Main Content */}
     <View>
      {/* Bank Header / Logo */}
      <View className="items-center mt-4 mb-8">
       <View className="flex-row items-center">
        {/* Red Arch accent above text */}
        <View className="items-center">
         <View className="w-10 h-3 border-t-2 border-red-500 rounded-t-full mb-[-2px]" />
         <Text className="text-[28px] font-bold text-white tracking-wide">
          CitiBank
         </Text>
        </View>
       </View>
      </View>

      {/* Title & Subtitle */}
      <View className="mb-6">
       <Text className="text-[28px] font-bold text-white">
        Welcome Back
       </Text>
       <Text className="mt-1 text-[15px] text-[#8EA3C3]">
        Sign in to your account
       </Text>
      </View>

      {/* Input Fields Container */}
      <View className="space-y-4">

       {/* Email / Mobile Input */}
       <View className="flex-row items-center h-[56px] px-4 rounded-xl bg-[#032B69]/60 border border-[#1E4D92]">
        <Text className="text-[18px] mr-3 text-[#8EA3C3]">👤</Text>
        <TextInput
         value={emailOrPhone}
         onChangeText={setEmailOrPhone}
         placeholder="Email or Mobile number"
         placeholderTextColor="#7D98BF"
         className="flex-1 text-[15px] text-white"
         keyboardType="email-address"
         autoCapitalize="none"
        />
       </View>

       {/* Password Input */}
       <View className="flex-row items-center h-[56px] px-4 mt-3 rounded-xl bg-[#032B69]/60 border border-[#1E4D92]">
        <Text className="text-[18px] mr-3 text-[#8EA3C3]">🔒</Text>
        <TextInput
         value={password}
         onChangeText={setPassword}
         placeholder="Password"
         placeholderTextColor="#7D98BF"
         secureTextEntry
         className="flex-1 text-[15px] text-white"
        />
        <Pressable className="p-1">
         <Text className="text-[16px] text-[#7D98BF]">👁️</Text>
        </Pressable>
       </View>

       {/* Forgot Password Link */}
       <Pressable
        onPress={onForgotPassword}
        className="align-self-end mt-2 items-end"
       >
        <Text className="text-[14px] font-medium text-[#0088FF]">
         Forgot Password?
        </Text>
       </Pressable>
      </View>

      {/* Sign In Button */}
      <Pressable
       onPress={onLoginSuccess}
       className="h-[54px] w-full mt-6 items-center justify-center rounded-full bg-[#0066FF] active:opacity-90"
      >
       <Text className="text-[16px] font-semibold text-white">
        Sign In
       </Text>
      </Pressable>

      {/* "or" Divider */}
      <View className="items-center my-6">
       <Text className="text-[14px] text-[#7D98BF]">or</Text>
      </View>

      {/* Continue with Google Button */}
      <Pressable
       onPress={() => console.log('Google login pressed')}
       className="h-[54px] w-full flex-row items-center justify-center rounded-full bg-white active:opacity-90"
      >
       <Text className="text-[18px] font-bold text-[#4285F4] mr-2">G</Text>
       <Text className="text-[15px] font-semibold text-[#1A202C]">
        Continue with Google
       </Text>
      </Pressable>
     </View>

     {/* Bottom Sign Up Link */}
     <View className="flex-row items-center justify-center py-2 mt-6">
      <Text className="text-[14px] text-[#8EA3C3]">
       Don&apos;t have an account?{' '}
      </Text>
      <Pressable onPress={onSignUp}>
       <Text className="text-[14px] font-semibold text-[#0088FF]">
        Sign Up
       </Text>
      </Pressable>
     </View>

    </View>
   </ScrollView>
  </SafeAreaView>
 );
}