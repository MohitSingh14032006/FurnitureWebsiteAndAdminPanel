'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    // useRouter use for navigate to login page
  const router = useRouter();

  //get form value using state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  })

  //show OTP form using showOTP state
  const [showOtp, setShowOtp] = useState(false)

  //OTP form Field state
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [message, setMessage] = useState('')

  //form fiels data using onChange
  const handleChange = (e) => {
    const { name, value } = e.target
    //console.log(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }))
    
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    setMessage('OTP sent to your email and phone. Please verify to continue.')
    setShowOtp(true)
  }

  //Check/handle the OTP input element
  const handleOtpChange = (index, value) => {

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    
    const enteredOtp = otp.join('')
    //console.log(enteredOtp);
    
    if (enteredOtp.length < 6) {
      setMessage('Please enter the complete 6-digit OTP.')
      return
    }
    setMessage(`Account verified successfully! OTP ${enteredOtp} accepted.`)
    setTimeout(() => {
      window.location.href = '/login'
    }, 1500)
  }

  return (
    <div className="flex flex-1 items-center justify-center p-8 sm:p-10 lg:p-14">
        <div className="w-full max-w-lg">
        <div className="mb-6">
            <h2 className="font-playfair text-3xl font-semibold text-[#1f1f1f]">
            {showOtp ? 'Verify OTP' : 'Register'}
            </h2>
            <p className="mt-2 text-sm text-dark-gray">
            {showOtp ? 'Enter the OTP sent to your contact details.' : 'Fill in your details to get started.'}
            </p>
        </div>

        {message ? (
            <div className="mb-4 rounded-xl border  px-4 py-3 text-sm text-orange-dim">
            {message}
            </div>
        ) : null}

        {!showOtp ? (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Full name
                </label>
                <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                    Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fdprocessedid="43vxu"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
                </div>

                <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                    Phone number
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
                </div>
            </div>

            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Password
                </label>
                <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
                className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
            </div>

            <div>
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Address
                </label>
                <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                placeholder="Enter your delivery address"
                className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
            >
                Register
            </button>
            </form>
        ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="h-12 w-12 rounded-lg border border-orange-100 bg-white text-center text-lg font-semibold outline-none focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
                />
                ))}
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#a9724d]"
            >
                Verify OTP
            </button>
            </form>
        )}

        <div className="mt-6 text-center text-sm text-dark-gray">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-orange-dim hover:text-orange-dim">
            Login
            </Link>
        </div>
        </div>
    </div>   
  )
}
