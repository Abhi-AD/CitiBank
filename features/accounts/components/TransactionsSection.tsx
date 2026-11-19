import { View, Text, Pressable, Alert } from 'react-native';
import {
 ChevronRight,
 ArrowDownLeft,
 ArrowUpRight,
} from 'lucide-react-native';
import { accountTransactions, FilterType, Transaction, transactionFilters } from 'constants/account';

interface Props {
 filter: FilterType;
 setFilter: (filter: FilterType) => void;
 showAll: boolean;
 setShowAll: (show: boolean) => void;
}

export default function TransactionsSection({
 filter,
 setFilter,
 showAll,
 setShowAll,
}: Props) {
 const filteredTransactions = accountTransactions.filter(
  (transaction: Transaction) => {
   if (filter === 'income') return transaction.credit;
   if (filter === 'expense') return !transaction.credit;
   return true;
  },
 );

 const displayedTransactions = showAll
  ? filteredTransactions
  : filteredTransactions.slice(0, 5);

 return (
  <View className="mx-4 mt-7 rounded-2xl border border-[#EDF1F6] bg-white p-4">
   <View className="mb-5 flex-row items-center justify-between">
    <View>
     <Text className="text-[16px] font-bold text-[#183153]">
      Recent Transactions
     </Text>

     <Text className="mt-1 text-[11px] text-[#94A3B8]">
      Your latest account activity
     </Text>
    </View>

    <Pressable
     onPress={() => setShowAll(true)}
     className="flex-row items-center"
    >
     <Text className="text-[11px] font-semibold text-[#07509A]">
      See All
     </Text>
     <ChevronRight size={15} color="#07509A" />
    </Pressable>
   </View>

   <View className="mb-3 flex-row gap-2">
    {transactionFilters.map((item) => {
     const isActive = filter === item.value;

     return (
      <Pressable
       key={item.value}
       onPress={() => {
        setFilter(item.value);
        setShowAll(false);
       }}
       className={`rounded-full px-4 py-2 ${isActive ? 'bg-[#07509A]' : 'bg-[#F1F5F9]'
        }`}
      >
       <Text
        className={`text-[11px] font-semibold ${isActive ? 'text-white' : 'text-[#64748B]'
         }`}
       >
        {item.label}
       </Text>
      </Pressable>
     );
    })}
   </View>

   <Text className="mb-1 text-[10px] text-[#94A3B8]">
    {filteredTransactions.length} transactions
   </Text>

   {displayedTransactions.length > 0 ? (
    displayedTransactions.map((transaction) => (
     <Pressable
      key={transaction.id}
      onPress={() =>
       Alert.alert(
        'Transaction Details',
        `${transaction.name}\n${transaction.date}\n${transaction.amount}`,
       )
      }
      className="flex-row items-center border-b border-[#F1F4F8] py-4 active:opacity-70"
     >
      <View
       className="h-11 w-11 items-center justify-center rounded-full"
       style={{ backgroundColor: transaction.color }}
      >
       {transaction.credit ? (
        <ArrowDownLeft size={20} color="#16A36A" />
       ) : (
        <ArrowUpRight size={20} color="#07509A" />
       )}
      </View>

      <View className="ml-3 flex-1">
       <Text className="text-[13px] font-semibold text-[#183153]">
        {transaction.name}
       </Text>

       <Text className="mt-1 text-[11px] text-[#94A3B8]">
        {transaction.date}
       </Text>
      </View>

      <View className="items-end">
       <Text
        className={`text-[13px] font-bold ${transaction.credit
         ? 'text-[#16A36A]'
         : 'text-[#183153]'
         }`}
       >
        {transaction.amount}
       </Text>

       <Text className="mt-1 text-[10px] text-[#94A3B8]">
        {transaction.credit ? 'Received' : 'Sent'}
       </Text>
      </View>
     </Pressable>
    ))
   ) : (
    <View className="items-center py-8">
     <Text className="text-[13px] text-[#94A3B8]">
      No transactions found.
     </Text>
    </View>
   )}

   {filteredTransactions.length > 5 && (
    <Pressable
     onPress={() => setShowAll(!showAll)}
     className="mt-4 items-center rounded-xl bg-[#F1F6FC] py-3"
    >
     <Text className="text-[12px] font-bold text-[#07509A]">
      {showAll ? 'Show Less' : 'View All Transactions'}
     </Text>
    </Pressable>
   )}
  </View>
 );
}