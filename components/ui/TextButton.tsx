
import React from 'react';
import { Pressable, Text } from 'react-native';

interface TextButtonProps {
 title: string;
 onPress: () => void;
 disabled?: boolean;
}

export default function TextButton({
 title,
 onPress,
 disabled = false,
}: TextButtonProps) {
 return (
  <Pressable
   onPress={onPress}
   disabled={disabled}
   accessibilityRole="button"
   accessibilityState={{ disabled }}
   hitSlop={8}
   className={`mt-3 items-center py-2 ${disabled ? 'opacity-50' : 'active:opacity-70'
    }`}
  >
   <Text className="text-[15px] font-medium text-[#7189AB]">
    {title}
   </Text>
  </Pressable>
 );
}
