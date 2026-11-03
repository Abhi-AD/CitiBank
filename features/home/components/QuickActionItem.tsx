
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';

interface QuickActionItemProps {
 title: string;
 icon: LucideIcon;
 onPress?: () => void;
}

export default function QuickActionItem({
 title,
 icon: Icon,
 onPress,
}: QuickActionItemProps) {
 return (
  <Pressable
   onPress={onPress}
   className="w-[22%] items-center"
   accessibilityRole="button"
   accessibilityLabel={title}
  >
   <View className="h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white">
    <Icon size={23} color="#1479E8" />
   </View>

   <Text className="mt-2 text-[11px] font-medium text-[#405574]">
    {title}
   </Text>
  </Pressable>
 );
}
