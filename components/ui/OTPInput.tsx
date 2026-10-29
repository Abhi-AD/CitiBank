import React from 'react';
import { View, TextInput } from 'react-native';

interface OTPInputProps {
 otp: string[];
 onChange: (value: string, index: number) => void;
 onKeyPress: (key: string, index: number) => void;
 inputRefs: {
  current: (React.ComponentRef<typeof TextInput> | null)[];
 };
}

export default function OTPInput({
 otp,
 onChange,
 onKeyPress,
 inputRefs,
}: OTPInputProps) {
 return (
  <View className="mt-7 flex-row justify-between">
   {otp.map((digit, index) => (
    <TextInput
     key={index}
     ref={(ref) => {
      inputRefs.current[index] = ref;
     }}
     value={digit}
     onChangeText={(value) => onChange(value, index)}
     onKeyPress={({ nativeEvent }) =>
      onKeyPress(nativeEvent.key, index)
     }
     keyboardType="number-pad"
     maxLength={1}
     selectTextOnFocus
     caretHidden
     className={`h-[42px] w-[38px] rounded-[9px] border text-center text-[16px] font-semibold ${digit
      ? 'border-[#1479E8] bg-[#F2F8FF] text-[#102F60]'
      : 'border-[#D8E3EF] bg-white text-[#102F60]'
      }`}
     accessibilityLabel={`OTP digit ${index + 1}`}
    />
   ))}
  </View>
 );
}