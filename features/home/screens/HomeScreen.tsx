
import Button from 'components/ui/Button';
import { bottomTabs, getGreeting, quickActions, transactions } from 'constants/home';
import { Bell } from 'lucide-react-native';
import { View, Text, ScrollView, Pressable, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionItem from '../components/TransactionItem';
import QuickActionItem from '../components/QuickActionItem';
import BalanceInfo from '../components/BalanceInfo';
import { Images } from 'constants/images';
import { useState } from 'react';

export default function HomeScreen() {
 const [activeTab, setActiveTab] = useState('Home');
 return (
  <SafeAreaView className="flex-1 bg-[#F5F8FC]">
   <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
   >
    {/* Header */}
    <View className="bg-[#07529B] px-5 pb-48 pt-5">
     <View className="flex-row items-center justify-between">
      <View>
       <Text className="text-[22px] text-blue-200">
        {getGreeting()}
       </Text>
       <Text className="mt-1 text-[32px] font-bold text-white">
        Abhishek Dangi
       </Text>
      </View>
      <View className="flex-row items-center gap-3">
       {/* Notification */}
       <Button
        icon={Bell}
        iconSize={21}
        iconColor="white"
        className="h-10 w-10 items-center justify-center rounded-full bg-white/15"
        containerClassName="items-center justify-center"
        onPress={() => console.log('Notification pressed')}
       />

       {/* Profile */}
       <View className="h-10 w-10 overflow-hidden rounded-full bg-[#DCEBFA]">
        <Image
         source={Images.profile}
         className="h-full w-full"
         resizeMode="cover"
        />
       </View>
      </View>
     </View>
    </View>

    {/* Balance Card */}
    <View className="-mt-[78px] mx-5 rounded-2xl bg-white p-5 shadow-md">
     <BalanceInfo balance="$12,485.00" percentage="+12.5%" />
    </View>

    {/* Quick Actions */}
    <View className="mt-7 px-5">
     <View className="flex-row justify-between">
      {quickActions.map((action) => (
       <QuickActionItem
        key={action.title}
        title={action.title}
        icon={action.icon}
        onPress={() => console.log(action.title)}
       />
      ))}
     </View>
    </View>

    {/* Recent Transactions */}
    <View className="mt-8 px-5">
     <View className="mb-4 flex-row items-center justify-between">
      <Text className="text-[17px] font-bold text-[#102F60]">
       Recent Transactions
      </Text>

      <Pressable>
       <Text className="text-[12px] font-semibold text-[#1479E8]">
        See All
       </Text>
      </Pressable>
     </View>

     <View className="rounded-2xl bg-white px-4">
      {transactions.map((item, index) => (
       <TransactionItem
        key={item.title}
        {...item}
        showBorder={index !== transactions.length - 1}
       />
      ))}
     </View>
    </View>
   </ScrollView>

   {/* Bottom Navigation */}
   <View className="flex-row items-center justify-around border-t border-[#E8EEF6] bg-white px-2 py-3">
    {bottomTabs.map((tab) => {
     const active = activeTab === tab.title;

     return (
      <Button
       key={tab.title}
       icon={tab.icon}
       text={tab.title}
       onPress={() => setActiveTab(tab.title)}
       iconSize={21}
       iconColor={active ? '#1479E8' : '#91A0B5'}
       textColor={active ? '#1479E8' : '#91A0B5'}
       textSize="text-[10px]"
       className="flex-1 items-center"
       containerClassName="flex-col items-center justify-center"
      />
     );
    })}
   </View>
  </SafeAreaView >
 );
}
