import OnboardingLayout from '../../components/common/OnboardingLayout';
import { OnboardingScreenProps } from '../../types/onboarding';
import { Images } from 'constants/images';

export default function OnboardingTwoScreen({
 onGetStarted,
 onSkip,
}: OnboardingScreenProps) {
 return (
  <OnboardingLayout
   title={['Secure', '& Convenient']}
   description="Enjoy safe, fast and easy banking anytime, anywhere."
   image={Images.securityIllustration}
   onGetStarted={onGetStarted}
   onSkip={onSkip}
  />
 );
}