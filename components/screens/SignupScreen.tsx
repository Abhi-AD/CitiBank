
import React, { useState } from 'react';
import {
 View,
 Text,
 Pressable,
 ScrollView,
 KeyboardAvoidingView,
 Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
 UserRound,
 Mail,
 Smartphone,
 LockKeyhole,
} from 'lucide-react-native';

import PrimaryButton from 'components/ui/PrimaryButton';
import TextButton from 'components/ui/TextButton';
import InputField from 'components/ui/InputField';

interface SignupScreenProps {
 onSignIn?: () => void;
 onSignupSuccess?: () => void;
}

export default function SignupScreen({
 onSignIn,
 onSignupSuccess,
}: SignupScreenProps) {
 const [fullName, setFullName] = useState('');
 const [email, setEmail] = useState('');
 const [mobile, setMobile] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);

 const handleSignup = () => {
  if (
   !fullName.trim() ||
   !email.trim() ||
   !mobile.trim() ||
   !password
  ) {
   console.warn('Please fill in all fields.');
   return;
  }

  // Connect your signup API here.
  onSignupSuccess?.();
 };

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
     keyboardShouldPersistTaps="handled"
     bounces={false}
    >
     <View className="flex-1 px-[14px] pt-2 pb-4">

      {/* Back Button */}
      <Pressable
       onPress={onSignIn}
       className="mb-3 h-9 w-9 items-center justify-center"
       hitSlop={8}
       accessibilityRole="button"
       accessibilityLabel="Go back to sign in"
      >
       <Text className="text-[28px] text-white">
        ‹
       </Text>
      </Pressable>

      {/* Signup Heading */}
      <View className="mb-[20px]">
       <Text className="text-[28px] font-bold text-white">
        Create Your Account
       </Text>

       <Text className="mt-[5px] text-[14px] text-[#8EA3C3]">
        Join us and get started today.
       </Text>
      </View>

      {/* Full Name */}
      <InputField
       icon={
        <UserRound
         size={17}
         color="#8EA3C3"
         strokeWidth={1.8}
        />
       }
       value={fullName}
       onChangeText={setFullName}
       placeholder="Full Name"
       autoCapitalize="words"
       autoCorrect={false}
       accessibilityLabel="Full name"
      />

      {/* Email */}
      <View className="mt-[9px]">
       <InputField
        icon={
         <Mail
          size={17}
          color="#8EA3C3"
          strokeWidth={1.8}
         />
        }
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Email address"
       />
      </View>

      {/* Mobile Number */}
      <View className="mt-[9px]">
       <InputField
        icon={
         <Smartphone
          size={17}
          color="#8EA3C3"
          strokeWidth={1.8}
         />
        }
        value={mobile}
        onChangeText={setMobile}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        accessibilityLabel="Mobile number"
       />
      </View>

      {/* Password */}
      <View className="mt-[9px]">
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

      {/* Create Account */}
      <View className="mt-[18px]">
       <PrimaryButton
        title="Create Account"
        onPress={handleSignup}
       />
      </View>

      {/* OR Divider */}
      <View className="my-[16px] flex-row items-center">
       <View className="h-px flex-1 bg-[#24436D]" />
       <Text className="mx-3 text-[12px] text-[#8EA3C3]">
        or
       </Text>
       <View className="h-px flex-1 bg-[#24436D]" />
      </View>

      {/* Google Signup */}
      <TextButton
       title="Continue with Google"
       onPress={() => {
        console.log('Google signup pressed');
       }}
       imageSource={require('../../assets/google.png')}
      />

      {/* Sign In Link */}
      <View className="mt-5 pb-2">
       <View className="flex-row items-center justify-center">
        <Text className="text-[12px] text-[#A5B8D5]">
         Already have an account?{' '}
        </Text>

        <Pressable
         onPress={onSignIn}
         hitSlop={5}
         accessibilityRole="button"
        >
         <Text className="text-[12px] font-semibold text-white">
          Sign In
         </Text>
        </Pressable>
       </View>
      </View>

     </View>
    </ScrollView>
   </KeyboardAvoidingView>
  </SafeAreaView>
 );
}
