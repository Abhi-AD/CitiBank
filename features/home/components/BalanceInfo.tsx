
import React from 'react';
import { View, Text } from 'react-native';
import { Wallet } from 'lucide-react-native';

interface BalanceInfoProps {
 title?: string;
 balance: string;
 percentage: string;
 description?: string;
}

export default function BalanceInfo({
 title = 'Total Balance',
 balance,
 percentage,
 description = 'Compared to last month',
}: BalanceInfoProps) {
 return (
  <>
   <View className="flex-row items-center justify-between">
    <Text className="text-[13px] text-[#8292A8]">{title}</Text>
    <Wallet size={20} color="#1479E8" />
   </View>

   <Text className="mt-2 text-[28px] font-bold text-[#102F60]">
    {balance}
   </Text>

   <View className="mt-3 flex-row items-center">
    <View className="rounded-full bg-[#E3F7EC] px-2 py-1">
     <Text className="text-[11px] font-semibold text-[#16A365]">
      {percentage}
     </Text>
    </View>

    <Text className="ml-2 text-[11px] text-[#8292A8]">
     {description}
    </Text>
   </View>
  </>
 );
}
