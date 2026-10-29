
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';

interface ButtonProps {
 onPress?: () => void;
 icon?: LucideIcon;
 text?: string;
 iconSize?: number;
 iconColor?: string;
 textColor?: string;
 textSize?: string;
 className?: string;
}

export default function Button({
 onPress,
 icon: Icon,
 text,
 iconSize = 24,
 iconColor = '#102F60',
 textColor = '#102F60',
 textSize = 'text-base',
 className = '',
}: ButtonProps) {
 if (!Icon && !text) {
  return null;
 }

 return (
  <Pressable
   onPress={onPress}
   disabled={!onPress}
   className={`mb-5 ${className}`}
   hitSlop={8}
   accessibilityRole="button"
   accessibilityLabel={text}
  >
   <View className="min-h-9 flex-row items-center">
    {Icon && (
     <Icon
      size={iconSize}
      color={iconColor}
      strokeWidth={2}
     />
    )}

    {text && (
     <Text
      className={`${textSize} font-medium ${Icon ? 'ml-1' : ''
       }`}
      style={{ color: textColor }}
     >
      {text}
     </Text>
    )}
   </View>
  </Pressable>
 );
}
