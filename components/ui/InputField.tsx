
import React from 'react';
import { View, TextInput, Pressable } from 'react-native';
import type { TextInputProps } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface InputFieldProps extends TextInputProps {
 icon: React.ReactNode;
 showPasswordToggle?: boolean;
 showPassword?: boolean;
 onTogglePassword?: () => void;
}

export default function InputField({
 icon,
 showPasswordToggle = false,
 showPassword = false,
 onTogglePassword,
 ...inputProps
}: InputFieldProps) {
 return (
  <View className="h-[60px] flex-row items-center px-9 rounded-[9px] bg-[#06295A] border border-[#21477C]">
   {icon}

   <TextInput
    {...inputProps}
    placeholderTextColor="#8EA3C3"
    className="flex-1 ml-3 text-[12px] text-white"
   />

   {showPasswordToggle && (
    <Pressable onPress={onTogglePassword} hitSlop={10}>
     {showPassword ? (
      <EyeOff size={16} color="#8EA3C3" />
     ) : (
      <Eye size={16} color="#8EA3C3" />
     )}
    </Pressable>
   )}
  </View>
 );
}
