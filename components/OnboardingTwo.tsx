import OnboardingLayout from './OnboardingLayout';
import { OnboardingScreenProps } from '../types/onboarding';

export default function OnboardingTwoScreen({
 onGetStarted,
 onSkip,
}: OnboardingScreenProps) {
 return (
  <OnboardingLayout
   title={['Secure', '& Convenient']}
   description="Enjoy safe, fast and easy banking anytime, anywhere."
   image={require('../assets/security-illustration.png')}
   onGetStarted={onGetStarted}
   onSkip={onSkip}
  />
 );
}