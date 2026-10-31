import React from 'react';
import OnboardingLayout from '../../components/common/OnboardingLayout';
import { OnboardingScreenProps } from '../../types/onboarding';
import { Images } from 'constants/images';

export default function OnboardingOneScreen({
 onGetStarted,
 onSkip,
}: OnboardingScreenProps) {
 return (
  <OnboardingLayout
   title={['Your Goals.', 'Our Support.']}
   description="Manage your money, achieve your goals, all in one place."
   image={Images.bankingIllustration}
   onGetStarted={onGetStarted}
   onSkip={onSkip}
  />
 );
}