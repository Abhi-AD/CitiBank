import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import OTPInput from 'components/ui/OTPInput';
import PrimaryButton from 'components/ui/PrimaryButton';
import { ChevronLeft } from 'lucide-react-native';
import Button from 'components/ui/Button';
import { OTPVerificationScreenProps } from 'types/auth';
import TextButton from 'components/ui/TextButton';

const OTP_LENGTH = 6;
const RESEND_SECONDS = 48;
type OTPInputRef = React.ComponentRef<typeof TextInput>;
export default function OTPVerificationScreen({
  phoneNumber = '+977 9812345678',
  onBack,
  onVerify,
  onResend,
}: OTPVerificationScreenProps) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [seconds, setSeconds] = useState(RESEND_SECONDS);
  const inputRefs = useRef<(OTPInputRef | null)[]>([]);

  useEffect(() => {
    if (!seconds) return;
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleChange = (value: string, index: number) => {
    const digits = value.replace(/\D/g, '');

    if (digits.length > 1) {
      const updated = Array(OTP_LENGTH).fill('');
      digits.slice(0, OTP_LENGTH).split('').forEach((d, i) => updated[i] = d);
      setOtp(updated);
      inputRefs.current[Math.min(digits.length, OTP_LENGTH - 1)]?.focus();
      return;
    }

    setOtp(prev => prev.map((d, i) => i === index ? digits : d));
    if (digits && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key !== 'Backspace') return;
    const target = otp[index] ? index : index - 1;
    if (target < 0) return;
    setOtp(prev => prev.map((d, i) => i === target ? '' : d));
    if (target !== index) inputRefs.current[target]?.focus();
  };

  const handleVerify = () => {
    if (!otp.every(Boolean)) return;
    Keyboard.dismiss();
    onVerify?.(otp.join(''));
  };

  const handleResend = () => {
    if (seconds > 0) return;
    setOtp(Array(OTP_LENGTH).fill(''));
    setSeconds(RESEND_SECONDS);
    onResend?.();
    inputRefs.current[0]?.focus();
  };

  const isOTPComplete = otp.every(Boolean);
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 px-4 pt-3 pb-4">
        <View className="flex-1 rounded-[22px]  px-5 pt-5 pb-6 ">
          <Button
            onPress={onBack}
            icon={ChevronLeft}
          />
          <Text className="text-[25px] font-bold text-[#102F60]">
            Verify Your Phone
          </Text>

          <Text className="mt-2 text-[12px] leading-5 text-[#8EA3C3]">
            Enter the verification code sent to
          </Text>

          <Text className="mt-1 text-[13px] font-semibold text-[#102F60]">
            {phoneNumber}
          </Text>

          <OTPInput
            otp={otp}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            inputRefs={inputRefs}
          />
          <View className="mt-5 w-full items-center">
            <Text className="text-[11px] text-[#8EA3C3]">
              Didn&apos;t receive the code?
            </Text>

            <Button
              onPress={seconds > 0 ? undefined : handleResend}
              className="w-full items-center"
              textColor={seconds > 0 ? '#8EA3C3' : '#1479E8'}
              textSize="text-[11px]"
              text={
                seconds > 0
                  ? `Resend code in 00:${String(seconds).padStart(2, '0')}`
                  : 'Resend Code'
              }
            />
          </View>

          <View className="mt-7">
            <PrimaryButton
              title="Verify"
              onPress={handleVerify}
              disabled={!isOTPComplete}
            />
          </View>
          <TextButton
            title="Having trouble?"
            onPress={() => Alert.alert('OTP verification help requested')}
            textSize="text-[11px]"
            textColor="#8EA3C3"
            className="mt-4 items-center"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}