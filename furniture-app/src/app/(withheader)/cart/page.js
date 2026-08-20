"use client";

import { changeQty, deleteCart } from "@/redux/cartSlice";
import Link from "next/link";
import react from "react";
import { MdAdd, MdDeleteOutline, MdOutlineKeyboardArrowRight, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default function CartPage() {
   let dispatch = useDispatch();
   let cart = useSelector((myStore)=>myStore.cartStore.cart)   

   let total = cart.reduce((acc, obj)=> acc += obj.quantity * obj.original_price,0)

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <section className="w-full mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 place-items-center border-b-1 border-gray-200 px-4 py-6">
          <h2 className="font-playfair text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Shopping Cart
          </h2>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 p-3 px-6 text-sm md:space-x-2">
              <li className="font-rubik text-dark-gray">
                <Link href="/">Home</Link>
              </li>
              <li className="font-rubik text-orange-dim">
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight className="mr-2" /> Shopping Cart
                </div>
              </li>
            </ol>
          </nav>
        </div>
        {
          cart.length == 0 ?
          (
            <div className="w-full grid justify-center items-center text-center">
              <img src="/my-Order.jpg" alt="not found" />
              <p>Your shopping cart is empty!</p>
            </div>
          )
          :
          (<div className="w-full grid lg:grid-cols-[70%_25%] gap-6 overflow-x-auto">
          <div className="mt-8">

            <table className="w-full border-collapse bg-white shadow rounded">
              <thead className="bg-gray-100 border-b-3 border-orange-dim ">
                <tr>
                  <th className="p-4">Image</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  
                  cart.map((cartObj, index) => (
                    <CardData key={index} item={cartObj}/>
                  ))  
                  
              }
              </tbody>
            </table>
          </div>

          <aside className="mt-8 border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="font-playfair text-2xl font-semibold">
              Order summary
            </h2>

            <div className="mt-6 space-y-3 text-sm text-dark-gray">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{Math.round(total,2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹150</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3 text-base font-semibold">
                <span>Total</span>
                <span>₹{Math.round(total,2)+150}</span>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-gray-100 bg-white p-4">
              <label
                htmlFor="coupon"
                className="mb-2 block text-sm font-medium text-dark-gray"
              >
                Coupon code
              </label>
              <div className="flex gap-2">
                <input
                  id="coupon"
                  type="text"
                  placeholder="FURNITURE10"
                  className="w-full rounded-sm border border-gray-100 bg-white px-3 py-2 text-sm outline-none focus:border-orange-dim"
                />
                <button
                  type="button"
                  className="rounded-sm bg-orange-dim px-3 py-2 text-sm font-semibold text-white"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-sm bg-orange-dim px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-dim"
            >
              <Link href={'/checkout'}>Proceed to checkout</Link>  
            </button>

            <Link
              href={"/product"}
              className="mt-4 block text-center text-sm font-medium text-orange-dim hover:text-orange-dim"
            >
              Continue shopping
            </Link>
          </aside>
        </div>)
      
        }
      </section>
    </div>
  );
}

function CardData({item}){
  let {id, image, name, original_price, quantity}= item;
  let dispatch = useDispatch(); 
  let removeCart = () =>{
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) 
          dispatch(deleteCart({id}))
          Swal.fire({
          title: "Deleted!",
          text: "Your Item remove from cart.",
          icon: "success"
        });
      });  
    }


    let checkQty= (type)=>{
      let finalQty = quantity
      if(type == "+"){
        finalQty = quantity + 1
      }
      else{
        if(quantity > 1){
          finalQty = quantity - 1
        }    
      }
      dispatch(changeQty({id, finalQty}));
      
    }
  return(
    <tr key={id} className="text-center border-gray-100">
      <td className="border border-gray-100 p-2">
        <img
          src={image}
          className="w-24 h-24 mx-auto rounded object-cover"
        />
      </td>

      <td className="border border-gray-100 p-2 font-semibold">{name}</td>

      <td className="border border-gray-100 p-2">Rs. {original_price}</td>

      <td className="border border-gray-100 p-2">
          <div className="flex items-center justify-center gap-2 rounded-full border border-[#ebdfd1] p-1">
              <button
                  type="button"
                  onClick={()=>checkQty("-")}
                  className="rounded-full p-1 text-[#1f1f1f] transition hover:bg-[#f9f5ef]"
              >
                  <MdRemove />
              </button>
              <span className="min-w-6 text-center text-sm font-semibold">
                  {quantity}
              </span>
              <button
                  type="button"
                  onClick={()=>checkQty("+")}
                  className="rounded-full p-1 text-[#1f1f1f] transition hover:bg-[#f9f5ef]"
              >
                  <MdAdd />
              </button>
          </div>
      </td>

      <td className="border border-gray-100 p-2 font-bold">
        Rs. {original_price * quantity}
      </td>

      <td className="border border-gray-100 p-2">
        <button
          key={id}
          onClick={removeCart}
          className="px-4 py-2 rounded"
        >
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  )
}
