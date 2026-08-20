import RegisterForm from "@/app/components/form-component/RegisterForm";
import React from "react";

export default function Register() {

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto min-h-[calc(100vh-5rem)] max-w-[600px] overflow-hidden rounded-[1rem] border border-orange-50 bg-white shadow-lg">

        <RegisterForm />
      </div>
    </div>
  )
}
