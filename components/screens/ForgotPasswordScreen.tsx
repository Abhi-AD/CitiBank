import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 Keyboard,
 Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';

import PrimaryButton from 'components/ui/PrimaryButton';
import Button from 'components/ui/Button';
import TextButton from 'components/ui/TextButton';
import { ForgotPasswordScreenProps } from 'types/auth';
import { isValidEmail } from 'constants/constantValue';

export default function ForgotPasswordScreen({ onBack, onSubmit, }: ForgotPasswordScreenProps) {
 const [email, setEmail] = useState('');
 const handleSubmit = () => {
  if (!isValidEmail(email)) {
   Alert.alert('Error', 'Please enter your email address.');
   return;
  }
  Keyboard.dismiss();
  onSubmit?.(email.trim());
 };

 return (
  <SafeAreaView className="flex-1">
   <View className="flex-1 px-4 pt-3 pb-4">
    <View className="flex-1 rounded-[22px] px-5 pt-5 pb-6">
     <Button onPress={onBack} icon={ChevronLeft} />
     <Text className="text-[25px] font-bold text-[#102F60]">
      Forgot Password?
     </Text>
     <Text className="mt-2 text-[12px] leading-5 text-[#8EA3C3]">
      Enter your email address and we&apos;ll send you a
      link to reset your password.
     </Text>
     {/* Email Input */}
     <View className="mt-6 flex-row items-center rounded-xl border border-[#E5EBF3] px-3">
      <TextInput value={email} onChangeText={setEmail} placeholder="Email Address" placeholderTextColor="#8EA3C3" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} className="h-12 flex-1 text-[13px] text-[#102F60]" />
     </View>
     {/* Send Reset Link */}
     <View className="mt-6">
      <PrimaryButton title="Send Reset Link" onPress={handleSubmit} disabled={!isValidEmail(email)} />
     </View>

     {/* Back to Login */}
     <TextButton title="Back to Login" onPress={() => onBack?.()} textSize="text-[11px]" textColor="#8EA3C3" className="mt-4 items-center" />

    </View>
   </View>
  </SafeAreaView>
 );
}