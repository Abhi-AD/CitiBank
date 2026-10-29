export interface OTPVerificationScreenProps {
  phoneNumber?: string;
  onBack?: () => void;
  onVerify?: (otp: string) => void;
  onResend?: () => void;
}
