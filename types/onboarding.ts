import { ImageSourcePropType } from 'react-native';

export interface OnboardingScreenProps {
  onGetStarted: () => void;
  onSkip: () => void;
}
export interface OnboardingThreeProps {
  onFinish: () => void;
  onSkip: () => void;
}
export interface OnboardingLayoutProps {
  title: string[];
  description: string;
  image: ImageSourcePropType;
  onGetStarted: () => void;
  onSkip: () => void;
}
