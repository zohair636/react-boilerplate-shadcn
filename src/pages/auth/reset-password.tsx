import ResetPasswordForm from '@/features/auth/components/shared/form/reset-password-form'
import AuthLayout from '@/features/auth/layout'

const ResetPassword = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  )
}

export default ResetPassword
