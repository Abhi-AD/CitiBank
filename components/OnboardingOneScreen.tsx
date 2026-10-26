import React from 'react';
import OnboardingLayout from './OnboardingLayout';
import { OnboardingScreenProps } from '../types/onboarding';

export default function OnboardingOneScreen({
 onGetStarted,
 onSkip,
}: OnboardingScreenProps) {
 return (
  <OnboardingLayout
   title={['Your Goals.', 'Our Support.']}
   description="Manage your money, achieve your goals, all in one place."
   image={require('../assets/banking-illustration.png')}
   onGetStarted={onGetStarted}
   onSkip={onSkip}
  />
 );
}