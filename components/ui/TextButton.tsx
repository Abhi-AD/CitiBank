
import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  imageSource?: ImageSourcePropType;
}

export default function TextButton({
  title,
  onPress,
  disabled = false,
  imageSource,
}: TextButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      hitSlop={8}
      className={`h-[54px] w-full flex-row items-center justify-center rounded-full bg-white ${disabled ? 'opacity-50' : 'active:opacity-90'
        }`}
    >
      {imageSource && (
        <Image
          source={imageSource}
          className=" h-12 w-12"
          resizeMode="contain"
        />
      )}

      <Text className="text-[15px] font-medium text-[#7189AB]">
        {title}
      </Text>
    </Pressable>
  );
}
