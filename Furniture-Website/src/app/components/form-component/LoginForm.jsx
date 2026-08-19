'use client'
import Link from 'next/link'
import react from 'react'
import { useRouter } from "next/navigation";
import axios from 'axios';
import iziToast from 'izitoast';
import { setToken } from '@/redux/userSlice';
import { useDispatch } from 'react-redux';


export default function LoginForm() {
    const router = useRouter();
    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

      let dispatch = useDispatch()

    let handleLogin = (e)=>{
       e.preventDefault()
      let obj={
        email:e.target.email.value,
        password:e.target.password.value
      }

    

      axios.post(`${apiBaseUrl}auth/login`,obj)
      .then((response) => response.data)
      .then((data) => {
        if (data.status === 1) {
          iziToast.success({
            title: "Success",
            message:" Login Successfully",
          })
          console.log(data.token)
          dispatch(setToken({token:data.token}))
          router.push("/dashboard")
          
        }
        else{
          iziToast.error({
            position: 'topRight',
            title: "Error",
            message: data.msg,
          });
        }
      })

     
      
        // alert("Login Successfully")
       
        // 
    }
  return (
      <div className="flex flex-1 items-center justify-center p-8 sm:p-10 lg:p-10">
        <div className="w-full max-w-md">
          <div className="mb-5">
            <h2 className="font-playfair text-3xl font-semibold text-[#1f1f1f]">Login</h2>
            <p className="mt-2 text-sm text-dark-gray">Enter your credentials to continue</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-dark-gray">
                <input type="checkbox" className="h-4 w-4 rounded border-orange-100 text-orange-dim focus:ring-orange-dim" />
                Remember me
              </label>
              <Link href={"/forgot-password"} className="font-medium text-orange-dim hover:text-orange-dim">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
            >
              Login
            </button>
          </form>

          <div className="mt-4 flex items-center gap-3 text-sm text-dark-gray">
            <div className="h-px flex-1 bg-orange-100" />
            <span>or</span>
            <div className="h-px flex-1 bg-orange-100" />
          </div>

          <div className="mt-4 text-center text-sm text-dark-gray">
            Don't have an account?{' '}
            <Link href="/register" className="font-semibold text-orange-dim hover:text-orange-dim">
              Register
            </Link>
          </div>
        </div>
      </div>
  )
}
