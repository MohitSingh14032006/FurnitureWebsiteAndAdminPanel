"use client";

import axios from "axios";
import iziToast from "izitoast";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    axios
      .post(`${apiBaseUrl}auth/forgot-password`, { email })
      .then((response) => response.data)
      .then((data) => {
        if (data.status === 1) {
          iziToast.success({
            title: "Success",
            position: 'topRight',
            message: data.message,
          });
        } else {
          iziToast.error({
            title: "Error",
          position: 'topRight',
            message: data.message,
          });
        }
      });

    setMessage(
      `Password reset instructions were sent to ${email}. Redirecting to login...`,
    );

    // setTimeout(() => {
    //   window.location.href = '/login'
    // }, 1500)
  };

  return (
    <div className="flex flex-1 items-center justify-center p-8 sm:p-10 lg:p-14">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <h2 className="font-playfair text-3xl font-semibold">
            Reset password
          </h2>
          <p className="mt-2 text-sm text-dark-gray">
            We’ll send a reset link to your email.
          </p>
        </div>

        {message ? (
          <div className="mb-4 rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm text-orange-dim">
            {message}
          </div>
        ) : null}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-dark-gray"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-dim focus:ring-2 focus:ring-orange-dim/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
          >
            Send reset link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-dark-gray">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-orange-dim hover:text-orange-dim"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
