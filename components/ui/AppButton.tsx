import { Pressable, Text } from 'react-native';

interface AppButtonProps {
 title: string;
 onPress?: () => void;
 variant?: 'primary' | 'google';
}

export default function AppButton({
 title,
 onPress,
 variant = 'primary',
}: AppButtonProps) {
 const isGoogle = variant === 'google';

 return (
  <Pressable
   onPress={onPress}
   className={`h-[43px] flex-row items-center justify-center ${isGoogle
    ? 'rounded-full bg-white'
    : 'rounded-[10px] bg-[#087CF5]'
    } active:opacity-80`}
  >
   {isGoogle && (
    <Text className="text-[18px] font-bold text-[#4285F4] mr-2">
     G
    </Text>
   )}

   <Text
    className={`text-[13px] font-semibold ${isGoogle ? 'text-[#263447]' : 'text-white'
     }`}
   >
    {title}
   </Text>
  </Pressable>
 );
}
