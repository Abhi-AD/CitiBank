import { accountQuickActions } from 'constants/account';
import { View, Text, Pressable } from 'react-native';
import type { QuickActionType } from 'types/account.types';


interface Props {
 onActionPress: (action: QuickActionType) => void;
}

export default function QuickActions({ onActionPress }: Props) {
 return (
  <View className="mx-4 mt-7">
   <Text className="mb-4 text-[16px] font-bold text-[#183153]">
    Quick Actions
   </Text>

   <View className="flex-row gap-3">
    {accountQuickActions.map((action) => {
     const Icon = action.icon;

     return (
      <Pressable
       key={action.id}
       onPress={() => onActionPress(action.title)}
       className="flex-1 items-center rounded-2xl border border-[#EDF1F6] bg-white py-4 active:opacity-70"
      >
       <View
        className="mb-2 h-12 w-12 items-center justify-center rounded-2xl"
        style={{ backgroundColor: action.bg }}
       >
        <Icon size={22} color={action.color} />
       </View>

       <Text className="text-[11px] font-semibold text-[#475569]">
        {action.title}
       </Text>
      </Pressable>
     );
    })}
   </View>
  </View>
 );
}