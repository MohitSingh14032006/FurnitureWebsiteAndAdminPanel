import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router";

export default function AddMaterials() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
  let navigate = useNavigate();

  const [materialName,setMaterialName] = useState("");
  const [materialOrder,setMaterialOrder] = useState("");
  const [error,setError] = useState(null);  

  let {id} = useParams();

  let handleSubmit = async (e) =>{
    e.preventDefault();
    let obj = {
      materialName,
      materialOrder
    }
    if(id){
      //Update
      axios.put(`${apiBaseUrl}material/update/${id}`,obj)
      .then((res)=>res.data)
      .then((finalRes)=>{
        // console.log(finalRes);
        if(finalRes.status){
          setError(null)
          toast.success(finalRes.message)
          setTimeout(
            ()=>{
              navigate("/material/view")
            },2000
          )        
        }
        else{
          setError(finalRes.err)
          toast.error(finalRes.err.name)
        }      
      })
    }
    else{
      axios.post(`${apiBaseUrl}material/create`,obj)
      .then((res)=>res.data)
      .then((finalRes)=>{
        // console.log(finalRes);
        if(finalRes.status){
          setError(null)
          toast.success(finalRes.message)
          setTimeout(
            ()=>{
              navigate("/material/view")
            },2000
          )        
        }
        else{
          setError(finalRes.err)
          toast.error(finalRes.err.name)
        }      
      })
    }
  }

  useEffect(()=>{
    if(id){
      axios.get(`${apiBaseUrl}material/details/${id}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
          console.log(finalRes);       
          let {name,order} = finalRes.data;   
          setMaterialName(name)
          setMaterialOrder(order)
        }
      )
    }
    else{
      setMaterialName("")
      setMaterialOrder("")
    }  
  },[id])

  return (
    <>
      <section className="w-full p-2">
        <ToastContainer/>
        <span className="text-gray-700 font-medium text-lg">
          Home / Material / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />
      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">
              {id ? "Update" : "Add"} Material
              </span>
          </div>
          <form onSubmit={handleSubmit} className="p-2">
            <div className="w-full flex flex-col mb-3">
              <label className=" font-medium">
                Material Name
              </label>
              <input
                type="text"
                placeholder="Material Name"
                value={materialName}
                onChange={(e)=>setMaterialName(e.target.value)}
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
                placeholder="Enter Order"
                value={materialOrder}
                onChange={(e)=>setMaterialOrder(e.target.value)}
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
              {id ? "Update" : "Add"} Material
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
