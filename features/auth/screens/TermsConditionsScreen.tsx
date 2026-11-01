
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, FileText, ShieldCheck, Check, } from 'lucide-react-native';
import PrimaryButton from 'components/ui/PrimaryButton';
import Button from 'components/ui/Button';
import DocumentLinkCard from 'components/ui/DocumentLinkCard';
interface TermsConditionsScreenProps {
  onBack?: () => void;
  onContinue?: () => void;
  onViewTerms?: () => void;
  onViewPrivacyPolicy?: () => void;
}

export default function TermsConditionsScreen({ onBack, onContinue, onViewTerms, onViewPrivacyPolicy, }: TermsConditionsScreenProps) {
  const [isAgreed, setIsAgreed] = useState(false);
  const handleContinue = () => {
    if (!isAgreed) {
      Alert.alert(
        'Agreement Required',
        'Please accept the Terms & Conditions to continue.',
      );
      return;
    }
    onContinue?.();
  };

  const handleViewTerms = () => {
    if (onViewTerms) {
      onViewTerms();
    } else {
      Alert.alert('Terms & Conditions', 'Your terms content goes here.');
    }
  };

  const handleViewPrivacy = () => {
    if (onViewPrivacyPolicy) {
      onViewPrivacyPolicy();
    } else {
      Alert.alert('Privacy Policy', 'Your privacy policy content goes here.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="flex-row items-center">
          <Button onPress={onBack} icon={ChevronLeft} iconColor='#000000' />
          <Text className="flex-1 text-[22px] font-bold text-[#102F60]">
            Terms &amp; Conditions
          </Text>
        </View>

        {/* Description */}
        <View className="mt-7">
          <Text className="text-[14px] leading-[22px] text-[#7186A8]">
            Please read and accept our Terms &amp; Conditions to continue.
          </Text>
        </View>

        {/* Terms and privacy options */}
        <View className="mt-10 gap-4">
          <DocumentLinkCard title="View Terms & Conditions" icon={FileText} onPress={handleViewTerms} />
          <DocumentLinkCard title="View Privacy Policy" icon={ShieldCheck} onPress={handleViewPrivacy} />
        </View>

        {/* Agreement checkbox */}
        <View className="mt-8 flex-row items-center">
          <Pressable
            onPress={() => setIsAgreed(!isAgreed)}
            className={`h-[22px] w-[22px] items-center justify-center rounded-[5px] border ${isAgreed ? 'border-[#1479E8] bg-[#1479E8]' : 'border-[#A9B9D1] bg-white'
              }`}
          >
            {isAgreed && <Check size={15} color="white" />}
          </Pressable>

          <Button text="I agree to the Terms & Conditions" onPress={() => setIsAgreed(!isAgreed)} textSize="text-[12px]" textColor="#102F60" className="ml-3" />
        </View>

        {/* Continue button */}
        <View className="mt-6">
          <PrimaryButton title="Continue" onPress={handleContinue} disabled={!isAgreed} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
