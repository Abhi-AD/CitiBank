
import { View, Text } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';

interface TransactionItemProps {
 title: string;
 date: string;
 amount: string;
 type: 'income' | 'expense';
 icon: LucideIcon;
 color: string;
 showBorder?: boolean;
}

export default function TransactionItem({ title, date, amount, type, icon: Icon, color, showBorder = true, }: TransactionItemProps) {
 const isIncome = type === 'income';
 return (
  <View className={`flex-row items-center py-4 ${showBorder ? 'border-b border-[#EDF1F7]' : ''}`}>
   <View className="h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: color }}   >
    <Icon size={21} color={isIncome ? '#16A365' : '#405574'} />
   </View>

   <View className="ml-3 flex-1">
    <Text className="text-[13px] font-semibold text-[#102F60]">
     {title}
    </Text>
    <Text className="mt-1 text-[10px] text-[#94A3B8]">
     {date}
    </Text>
   </View>

   <Text
    className={`text-[13px] font-bold ${isIncome ? 'text-[#16A365]' : 'text-[#102F60]'
     }`}
   >
    {amount}
   </Text>
  </View>
 );
}
