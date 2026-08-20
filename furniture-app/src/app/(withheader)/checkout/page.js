"use client"
import Link from 'next/link'
import {
  MdAdd,
  MdDeleteOutline,
  MdOutlineKeyboardArrowRight,
  MdRemove,
} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

export default function CheckoutPage() {
  
  let cart = useSelector((myStore)=>myStore.cartStore.cart)

  let total = cart.reduce((acc,obj)=> acc += obj.quantity *  obj.original_price, 0)
  let shipping = 150

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Checkout
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> Checkout
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] mt-8">
          <div className="space-y-6">
            <div className="rounded-sm border border-[#ebdfd1] bg-white p-6 shadow-sm">
              <h2 className="font-playfair text-2xl font-semibold text-dark-gray">Billing & shipping address</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Full name</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Full Name" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Mobile number</label>
                  <input type='tel' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Mobile Number" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Billing name</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Billing Name" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Billing Email</label>
                  <input type='email' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Billing Email" />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Billing Mobile Number</label>
                  <input type='tel' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Mobile Number" />
                </div>
                
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Billing Address</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Billing Address" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Country</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Billing Country" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">State</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Billing   State" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">City</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter City" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-dark-gray">Pincode</label>
                  <input type='text' className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-dim" placeholder="Enter Pincode" />
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-[#ebdfd1] bg-white p-6 shadow-sm">
              <h2 className="font-playfair text-2xl font-semibold text-[#1f1f1f]">Payment method</h2>
              <div className="mt-5 space-y-3">
                <label className="flex items-center gap-3 rounded-sm border border-[#e5d8ca] p-3 text-sm text-[#1f1f1f]">
                  <input type="radio" name="payment" defaultChecked className="h-4 w-4 accent-orange-dim" />
                  Cash on delivery
                </label>
                <label className="flex items-center gap-3 rounded-sm border border-[#e5d8ca] p-3 text-sm text-[#1f1f1f]">
                  <input type="radio" name="payment" className="h-4 w-4 accent-orange-dim" />
                  Credit / Debit card
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold text-dark-gray">Order summary</h2>
            <div className="mt-5 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm text-dark-gray">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{item.original_price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-[#f0e2d4] pt-4 text-sm text-dark-gray">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between border-t border-[#f0e2d4] pt-3 text-base font-semibold text-[#1f1f1f]">
                <span>Total</span>
                <span>Rs. {total+shipping}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#a9724d]">
              Place order
            </button>

            <Link href={"/cart"} className="mt-4 block text-center text-sm font-medium text-orange-dim hover:text-[#a9724d]">
              Back to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
