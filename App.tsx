
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './components/SplashScreen';
import OnboardingOneScreen from './components/OnboardingOneScreen';
import OnboardingTwoScreen from './components/OnboardingTwo';
import OnboardingThreeScreen from './components/OnboardingThreeScreen';

import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen';
import OTPVerificationScreen from './components/screens/OTPVerificationScreen';
import { Alert } from 'react-native';

type AuthScreen = 'login' | 'signup' | 'otp';
type OTPSource = 'login' | 'signup';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [showLogin, setShowLogin] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>('login');
  const [otpSource, setOtpSource] = useState<OTPSource>('login');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        style={
          showSplash
            ? 'light'
            : showLogin && authScreen !== 'login'
              ? 'dark'
              : showLogin
                ? 'light'
                : 'dark'
        }
      />

      {showSplash ? (
        <SplashScreen />
      ) : showLogin ? (
        authScreen === 'login' ? (
          <LoginScreen
            onSignUp={() => setAuthScreen('signup')}
            onForgotPassword={() => {
              Alert.alert('Open Forgot Password');
            }}
            onLoginSuccess={() => {
              setOtpSource('login');
              setAuthScreen('otp');
            }}
          />
        ) : authScreen === 'signup' ? (
          <SignupScreen
            onSignIn={() => setAuthScreen('login')}
            onSignupSuccess={() => {
              setOtpSource('signup');
              setAuthScreen('otp')
            }}
          />
        ) : (
          <OTPVerificationScreen
            onBack={() => setAuthScreen(otpSource)}
            onVerify={(otp) => {
              Alert.alert('Entered OTP:', otp);
            }}
            onResend={() => {
              Alert.alert('Request a new OTP');
            }}
          />
        )
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
