import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {

  let navigate = useNavigate()

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let saveEnquiry = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;    
    
    if (email === "" && password === "") {
      setEmailError("Email is required");
      setPasswordError("Password is required");
      return;
    }
    if (email === "") {
      setEmailError("Email is required");
      return;
    }
    if(password === ""){
      setPasswordError("Password is required");
      return;
    }
    navigate('/dashboard')
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-50 h-20 mr-2"
            src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={saveEnquiry}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Email"
                  onChange={() => {
                    if (emailError) setEmailError("");
                  }}
                  />
                  
                {emailError && (
                  <p className="text-red-500">
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={()=>{
                    if(passwordError) setPasswordError("");
                  }}
                />
                {
                  passwordError && (
                    <p className="text-red-500">{passwordError}</p>
                  )
                }
              </div>              
              <button
                type="submit"
                className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
