import { View, Text } from 'react-native';
import Button from 'components/ui/Button';
import { ChevronLeft } from 'lucide-react-native';
import { accounts } from 'constants/account';
import AccountItem from '../components/AccountItem';



export default function AccountsScreen({ onBack }: { onBack: () => void }) {
 return (
  <View className="flex-1">
   {/* Main Account Container */}
   <View className="flex-1 rounded-[22px] bg-white px-5 py-5">

    {/* Header */}
    <View className="mb-7 flex-row items-center">
     <Button text='Accounts' onPress={onBack} textColor="#102F60" iconColor="#102F60" textSize="text-[20px]" icon={ChevronLeft} />
    </View>
    {/* Account Cards */}
    <View className="gap-4">
     {accounts.map((account) => (
      <AccountItem
       key={account.id}
       title={account.title}
       balance={account.balance}
       number={account.number}
       icon={account.icon}
       color={account.color}
       onPress={() => console.log(account.title)}
      />
     ))}
    </View>


    {/* Divider */}
    <View className="my-6 h-[1px] bg-[#EDF1F6]" />

    {/* Total Balance */}
    <View>
     <Text className="text-[13px] font-semibold text-[#64748B]">
      Total Balance
     </Text>

     <Text className="mt-2 text-[25px] font-extrabold text-[#102F60]">
      $ 12,450.00
     </Text>
    </View>

   </View>

   {/* Screen Title */}
   <Text className="mb-4 mt-4 text-center text-[14px] font-bold text-[#526174]">
    Accounts Overview
   </Text>

  </View>
 );
}
