
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MoreVertical } from 'lucide-react-native';

type AccountItemProps = {
 title: string;
 balance: string;
 number: string;
 icon: React.ElementType;
 color: string;
 onPress?: () => void;
};

export default function AccountItem({
 title,
 balance,
 number,
 icon: Icon,
 color,
 onPress,
}: AccountItemProps) {
 return (
  <Pressable
   onPress={onPress}
   className="flex-row items-center rounded-xl border border-[#EDF1F6] bg-white px-3 py-4"
  >
   {/* Icon */}
   <View
    className="h-[58px] w-[58px] items-center justify-center rounded-xl"
    style={{ backgroundColor: color }}
   >
    <Icon size={25} color="white" strokeWidth={1.8} />
   </View>

   {/* Details */}
   <View className="ml-3 flex-1">
    <Text className="text-[12px] font-semibold text-[#64748B]">
     {title}
    </Text>

    <Text className="mt-1 text-[16px] font-bold text-[#102F60]">
     {balance}
    </Text>

    <Text className="mt-1 text-[10px] text-[#94A3B8]">
     {number}
    </Text>
   </View>

   {/* Options */}
   <Pressable className="p-1">
    <MoreVertical size={19} color="#64748B" />
   </Pressable>
  </Pressable>
 );
}
