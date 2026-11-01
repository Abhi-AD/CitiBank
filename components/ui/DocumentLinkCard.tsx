import React from 'react';
import { Text, Pressable } from 'react-native';
import { ChevronRight, } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

interface DocumentLinkCardProps {
 title: string;
 icon: LucideIcon;
 onPress: () => void;
}

export default function DocumentLinkCard({
 title,
 icon: Icon,
 onPress,
}: DocumentLinkCardProps) {
 return (
  <Pressable
   onPress={onPress}
   className="min-h-[76px] flex-row items-center rounded-2xl border border-[#E2EAF6] px-4"
   accessibilityRole="button"
   accessibilityLabel={title}
  >
   <Icon
    size={25}
    color="#1479E8"
    strokeWidth={2}
   />

   <Text className="ml-4 flex-1 text-[14px] font-medium text-[#102F60]">
    {title}
   </Text>

   <ChevronRight size={21} color="#7186A8" />
  </Pressable>
 );
}