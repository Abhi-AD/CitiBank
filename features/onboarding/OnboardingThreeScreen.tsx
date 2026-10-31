import OnboardingLayout from '../../components/common/OnboardingLayout';
import { OnboardingThreeProps } from '../../types/onboarding';
import { Images } from 'constants/images';

export default function OnboardingThreeScreen({
 onFinish,
 onSkip,
}: OnboardingThreeProps) {
 return (
  <OnboardingLayout
   title={['Build a Brighter', 'Financial Future']}
   description="More features. More control. More for you."
   image={Images.futureIllustration}
   onGetStarted={onFinish}
   onSkip={onSkip}
  />
 );
}
