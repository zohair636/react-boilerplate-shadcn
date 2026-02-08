import ForgotPasswordForm from '@/features/auth/components/shared/form/forgot-password-form'
import AuthLayout from '@/features/auth/layout'

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  )
}

export default ForgotPassword
