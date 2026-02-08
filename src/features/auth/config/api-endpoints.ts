export const AUTH_API_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  FORGOT_PASSWORD: "/auth/forgot",
  RESET_PASSWORD: (id: string | number) => `/auth/reset/${id}`,
  VERIFY_OTP: (id: string | number) => `/auth/verify/${id}`,
  RESEND_OTP: (id: string | number) => `/auth/resendOTP/${id}`,
  ME: "/auth/me",
};
