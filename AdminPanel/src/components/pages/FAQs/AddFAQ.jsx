import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";

export default function AddFAQ() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
  let navigate = useNavigate();
  
  const [faqQuestion,setfaqQuestion] = useState("");
  const [faqAnswer,setfaqAnswer] = useState("");
  const [faqOrder,setfaqOrder] = useState("");
  const [error,setError] = useState(null);

  let handleSubmit = (e) =>{
     e.preventDefault()

     let obj = {
      faqQuestion,
      faqAnswer,
      faqOrder
     }
     axios.post(`${apiBaseUrl}faq/create`,obj)
     .then((res)=>res.data)
     .then((finalRes)=>{
      if(finalRes.status){
        setError(null)
        toast.success(finalRes.message)
          setTimeout(
            ()=>{
              navigate("/faq/view")
            },2000
          )        
      }else{
        setError(finalRes.err)
        toast.error(finalRes.err.question)
      }      
     })
  }

  return (
    <>
      <ToastContainer/>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Faq / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">Add Faq</span>
          </div>
          <form className="p-2" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mb-3">
              <label className="font-medium">
                Question
              </label>
              <input
                type="text"
                value={faqQuestion}
                onChange={(e)=>setfaqQuestion(e.target.value)}
                placeholder="Question"
                className="border-1 border-gray-400 rounded-lg p-2"
              />
              {
                error?.question && <span className="text-red-600 text-[12px]">{error.question}</span>
              }
            </div>
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="" className=" font-medium">
                Answer
              </label>
              <textarea value={faqAnswer} onChange={(e)=>setfaqAnswer(e.target.value)} placeholder="Answer" className="border-1 border-gray-400 rounded-lg p-2 h-[150px]"></textarea>
              {
                error?.answer && <span className="text-red-600 text-[12px]">{error.answer}</span>
              }
            </div>
            <div className="w-full flex flex-col mb-20">
              <label className=" font-medium">
                Order
              </label>
              <input
                type="number"
                placeholder="Order"
                value={faqOrder}
                onChange={(e)=>setfaqOrder(e.target.value)}
                className="border-1 border-gray-400 rounded-lg p-2"
              />
              {
                error?.order && <span className="text-red-600 text-[12px]">{error.order}</span>
              }
            </div>
            <button
              type="submit"
              onSubmit="changeFinally"
              className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold mb-10 hover:cursor-pointer"
            >
              Add Faq
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
