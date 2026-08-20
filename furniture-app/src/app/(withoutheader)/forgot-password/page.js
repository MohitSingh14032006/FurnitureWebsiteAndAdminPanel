import ForgotPasswordForm from '@/app/components/form-component/ForgotPasswordForm'
import react from 'react'

export default function ForgotPassword() {
  
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[600px] overflow-hidden rounded-[1rem] border border-[#f0e2d4] bg-white shadow-lg">
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
