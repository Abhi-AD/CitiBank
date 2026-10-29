import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  imageSource?: ImageSourcePropType;
  textSize?: string;
  textColor?: string;
  className?: string;
}

export default function TextButton({
  title,
  onPress,
  disabled = false,
  imageSource,
  textSize = 'text-[15px]',
  textColor = '#7189AB',
  className = 'h-[54px] w-full rounded-full bg-white',
}: TextButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      hitSlop={8}
      className={`flex-row items-center justify-center ${disabled ? 'opacity-50' : 'active:opacity-90'
        } ${className}`}
    >
      {imageSource && (
        <Image
          source={imageSource}
          className="h-12 w-12"
          resizeMode="contain"
        />
      )}

      <Text
        className={`${textSize} font-medium`}
        style={{ color: textColor }}
      >
        {title}
      </Text>
    </Pressable>
  );
}