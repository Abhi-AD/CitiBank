import OnboardingLayout from './OnboardingLayout';
import { OnboardingThreeProps } from '../types/onboarding';

export default function OnboardingThreeScreen({
 onFinish,
 onSkip,
}: OnboardingThreeProps) {
 return (
  <OnboardingLayout
   title={['Build a Brighter', 'Financial Future']}
   description="More features. More control. More for you."
   image={require('../assets/future-illustration.png')}
   onGetStarted={onFinish}
   onSkip={onSkip}
  />
 );
}
