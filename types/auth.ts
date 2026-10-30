export interface OTPVerificationScreenProps {
  phoneNumber?: string;
  onBack?: () => void;
  onVerify?: (otp: string) => void;
  onResend?: () => void;
}
export interface ForgotPasswordScreenProps {
  onBack?: () => void;
  onSubmit?: (email: string) => void;
}
