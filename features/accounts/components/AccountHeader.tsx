import { View, Text } from 'react-native';
import { ChevronLeft, CircleHelp } from 'lucide-react-native';

import Button from 'components/ui/Button';

interface Props {
 onBack: () => void;
}

export default function AccountHeader({ onBack }: Props) {
 return (
  <View className="bg-[#07509A] px-5 pb-9 pt-4">
   <View className="mb-8 flex-row items-center justify-between">
    <Button
     icon={ChevronLeft}
     onPress={onBack}
     iconSize={25}
     iconColor="#FFFFFF"
    />

    <Text className="text-[17px] font-semibold text-white">
     Account Details
    </Text>

    <Button
     icon={CircleHelp}
     iconSize={22}
     iconColor="#FFFFFF"
    />
   </View>

   <Text className="text-center text-[13px] text-[#C5D9F0]">
    Personal Checking
   </Text>

   <Text className="mt-2 text-center text-[34px] font-bold text-white">
    $5,230.00
   </Text>

   <Text className="mt-1 text-center text-[12px] text-[#C5D9F0]">
    Available Balance
   </Text>
  </View>
 );
}