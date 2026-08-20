import ResetPasswordForm from '@/app/components/form-component/ResetPasswordForm'
import React from 'react'

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex mx-auto min-h-[calc(100vh-8rem)] max-w-[600px] overflow-hidden rounded-[1rem] border border-orange-50 bg-white shadow-lg">
            <ResetPasswordForm />   
        </div>
    </div>
  )
}
