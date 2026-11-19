import { View, Text, Pressable } from 'react-native';
import { Building2, MoreHorizontal } from 'lucide-react-native';
import { accountDetails } from 'constants/account';

export default function AccountInfoCard({ onMorePress }: {
 onMorePress: () => void;
}) {
 return (
  <View className="mx-4 -mt-5 rounded-2xl border border-[#EDF1F6] bg-white p-4">
   <View className="flex-row items-center">
    <View className="h-12 w-12 items-center justify-center rounded-xl bg-[#E7F1FC]">
     <Building2 size={24} color="#07509A" />
    </View>

    <View className="ml-3 flex-1">
     <Text className="text-[14px] font-bold text-[#183153]">
      {accountDetails.accountName}
     </Text>

     <Text className="mt-1 text-[12px] text-[#8292A8]">
      Account Number {accountDetails.accountNumber}
     </Text>
    </View>

    <Pressable
     onPress={onMorePress}
     className="h-9 w-9 items-center justify-center"
    >
     <MoreHorizontal size={22} color="#64748B" />
    </Pressable>
   </View>

   <View className="my-4 h-[1px] bg-[#EDF1F6]" />

   <View className="flex-row justify-between">
    <View>
     <Text className="text-[11px] text-[#8292A8]">
      Account Type
     </Text>
     <Text className="mt-1 text-[13px] font-semibold text-[#183153]">
      {accountDetails.accountType}
     </Text>
    </View>

    <View>
     <Text className="text-[11px] text-[#8292A8]">
      Currency
     </Text>
     <Text className="mt-1 text-[13px] font-semibold text-[#183153]">
      {accountDetails.currency}
     </Text>
    </View>

    <View>
     <Text className="text-[11px] text-[#8292A8]">
      Status
     </Text>
     <Text className="mt-1 text-[13px] font-semibold text-[#16A36A]">
      {accountDetails.status}
     </Text>
    </View>
   </View>
  </View>
 );
}