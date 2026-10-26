import { Pressable, Text } from 'react-native';

interface PrimaryButtonProps {
 title: string;
 onPress: () => void;
 disabled?: boolean;
}

export default function PrimaryButton({
 title,
 onPress,
 disabled = false,
}: PrimaryButtonProps) {
 return (
  <Pressable
   onPress={onPress}
   disabled={disabled}
   accessibilityRole="button"
   accessibilityState={{ disabled }}
   className={`h-[54px] w-full items-center justify-center rounded-full bg-[#0066FF] ${disabled ? 'opacity-50' : 'active:opacity-90'
    }`}
  >
   <Text className="text-base font-semibold text-white">
    {title}
   </Text>
  </Pressable>
 );
}
