export const isValidEmail = (email: string): boolean => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email.trim());
};
export const OTP_LENGTH = 6;
export const RESEND_SECONDS = 48;
