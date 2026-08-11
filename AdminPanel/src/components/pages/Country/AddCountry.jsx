import axios from 'axios';
import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

export default function AddCountry() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
  let navigate = useNavigate();

  const [countryName,setCountryName] = useState("")
  const [countryOrder,setCountryOrder] = useState("")
  const [error,setError] = useState(null)

  let handleSubmit = async (e) =>{
    e.preventDefault()
    let obj = {
      countryName,
      countryOrder
    }
    axios.post(`${apiBaseUrl}country/create`,obj)
    .then((res)=>res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        setError(null)
        toast.success(finalRes.message)
        setTimeout(
          ()=>{
            navigate("/country/view")
          },2000
        )        
      }else{
        setError(finalRes.err)
        toast.error(finalRes.err.name)
      }      
    })
  }
  return (
    <>
      <section className="w-full p-2">
        <ToastContainer/>
        <span className="text-gray-700 font-medium text-lg">
          Home / Country / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />
      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">Add Country</span>
          </div>
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mb-3">
              <label className="font-medium">
                Country Name
              </label>
              <input
                type="text"
                placeholder="Country Name"
                value={countryName}
                onChange={(e)=>setCountryName(e.target.value)}
                className="border-1 border-gray-400 rounded-lg p-2"
              />
              {
                error?.name && <span className="text-red-600 text-[12px]">{error.name}</span>
              }
            </div>
            <div className="w-full flex flex-col mb-20">
              <label className="font-medium">
                Order
              </label>
              <input
                type="number"
                placeholder="Order"
                value={countryOrder}
                onChange={(e)=>setCountryOrder(e.target.value)}
                className="border-1 border-gray-400 rounded-lg p-2"
              />
              {
                error?.order && <span className="text-red-600 text-[12px]">{error.order}</span>
              }
            </div>
            <button
              type="submit"
              className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold mb-10 hover:cursor-pointer"
            >
              Add Country
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
