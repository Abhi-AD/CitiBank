
import React, { useState } from 'react';
import {
 View,
 Text,
 Pressable,
 ScrollView,
 Image,
 KeyboardAvoidingView,
 Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserRound, LockKeyhole } from 'lucide-react-native';

import PrimaryButton from 'components/ui/PrimaryButton';
import TextButton from 'components/ui/TextButton';
import InputField from 'components/ui/InputField';

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
 const [showPassword, setShowPassword] = useState(false);

 return (
  <SafeAreaView className="flex-1 bg-[#001D4A]">
   <KeyboardAvoidingView
    className="flex-1"
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
   >
    <ScrollView
     className="flex-1"
     contentContainerStyle={{ flexGrow: 1 }}
     showsVerticalScrollIndicator={false}
     bounces={false}
     keyboardShouldPersistTaps="handled"
    >
     <View className="flex-1 px-[14px] pt-2 pb-4">
      {/* CitiBank Logo */}
      <View className="mt-1 mb-5 items-center">
       <Image
        source={require('../../assets/white_logo.png')}
        resizeMode="contain"
        className="h-[40px] w-[88px]"
       />
      </View>

      {/* Welcome Heading */}
      <View className="mb-[17px]">
       <Text className="text-[28px] font-bold text-white">
        Welcome Back
       </Text>

       <Text className="mt-[3px] text-[20px] text-[#8EA3C3]">
        Sign in to your account
       </Text>
      </View>

      {/* Email or Mobile Input */}
      <InputField
       icon={
        <UserRound
         size={17}
         color="#8EA3C3"
         strokeWidth={1.8}
        />
       }
       value={emailOrPhone}
       onChangeText={setEmailOrPhone}
       placeholder="Email or Mobile number"
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       accessibilityLabel="Email or mobile number"
      />

      {/* Password Input */}
      <View className="mt-[7px]">
       <InputField
        icon={
         <LockKeyhole
          size={17}
          color="#8EA3C3"
          strokeWidth={1.8}
         />
        }
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Password"
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() =>
         setShowPassword((previous) => !previous)
        }
       />
      </View>

      {/* Forgot Password */}
      <Pressable
       onPress={onForgotPassword}
       className="mt-[7px] w-full items-end"
       hitSlop={5}
       accessibilityRole="button"
      >
       <Text className="text-[18px] font-medium text-[#A5B8D5]  border-b-2 border-blue-900">
        Forgot Password?
       </Text>
      </Pressable>

      {/* Bottom Actions */}
      <View className="mt-auto pt-5 pb-1">
       {/* Sign In */}
       <View className="mt-[17px]">
        <PrimaryButton
         title="Sign In"
         onPress={() => onLoginSuccess?.()}
        />
       </View>

       {/* OR Divider */}
       <View className="my-[16px] items-center">
        <Text className="text-[11px] text-[#8EA3C3]">
         or
        </Text>
       </View>

       {/* Continue with Google */}
       <TextButton
        title="Continue with Google"
        onPress={() =>
         console.log('Google login pressed')
        }
        imageSource={require('../../assets/google.png')}
       />

       {/* Sign Up */}
       <View className="mt-5 pb-1">
        <View className="flex-row items-center justify-center">
         <Text className="text-[11px] text-[#A5B8D5]">
          Don&apos;t have an account?{' '}
         </Text>

         <Pressable
          onPress={onSignUp}
          hitSlop={5}
          accessibilityRole="button"
         >
          <Text className="text-[11px] font-semibold text-white">
           Sign Up
          </Text>
         </Pressable>
        </View>
       </View>
      </View>
     </View>
    </ScrollView>
   </KeyboardAvoidingView>
  </SafeAreaView>
 );
}
