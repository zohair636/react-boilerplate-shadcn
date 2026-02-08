import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import('@/pages/auth/login'));
const SignUp = lazy(() => import('@/pages/auth/sign-up'));
const ForgotPassword = lazy(() => import('@/pages/auth/forgot-password'));
const Otp = lazy(() => import('@/pages/auth/otp'));
const ResetPassword = lazy(() => import('@/pages/auth/reset-password'));

export const AUTH_ROUTES = [
    {
        index: true,
        element: <Navigate to='/auth/login' replace />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'sign-up',
        element: <SignUp />
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword />
    },
    {
        path: 'otp',
        element: <Otp />
    },
    {
        path: 'reset-password',
        element: <ResetPassword />
    },
]