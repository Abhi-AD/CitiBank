import { StatusBar } from 'expo-status-bar';
import './global.css';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './components/SplashScreen';
import OnboardingOneScreen from './components/OnboardingOneScreen';
import OnboardingTwoScreen from './components/OnboardingTwo';
import OnboardingThreeScreen from './components/OnboardingThreeScreen';
import LoginScreen from './components/LoginScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style={showSplash ? "light" : !showLogin ? 'dark' : 'light'} />

      {showSplash ? (
        <SplashScreen />
      ) : showLogin ? (
        <LoginScreen
          onSignUp={() => console.log('Open Sign Up')}
          onForgotPassword={() =>
            console.log('Open Forgot Password')
          }
          onLoginSuccess={() => console.log('Login successful')}
        />
      ) : onboardingStep === 1 ? (
        <OnboardingOneScreen
          onGetStarted={() => setOnboardingStep(2)}
          onSkip={() => setShowLogin(true)}
        />
      ) : onboardingStep === 2 ? (
        <OnboardingTwoScreen
          onGetStarted={() => setOnboardingStep(3)}
          onSkip={() => setShowLogin(true)}
        />
      ) : (
        <OnboardingThreeScreen
          onFinish={() => setShowLogin(true)}
          onSkip={() => setShowLogin(true)}
        />
      )}
    </SafeAreaProvider>
  );
}
