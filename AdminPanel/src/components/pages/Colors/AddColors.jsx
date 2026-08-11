import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ColorPicker from 'react-pick-color';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router";

export default function AddColors() {
      
  const [colorName,setColorName] = useState("");
  const [colorCode,setColorCode] = useState("#000000");
  const [colorOrder,setColorOrder] = useState("");
  const [error,setError] = useState(null);
  
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;
  let navigate = useNavigate();

  //get url id
  let {id} = useParams();
  // console.log(id);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let obj = {
      colorName,
      colorCode,
      colorOrder
    }
    // console.log(obj);   
    
    if(id){
      //update
      axios.put(`${apiBaseUrl}color/update/${id}`,obj)
      .then((res)=>res.data)   
      .then((finalRes)=>{
        if(finalRes.status){
          setError(null)
          toast.success(finalRes.message)
          setTimeout(
            ()=>{
              navigate("/color/view")
            },2000
          )        
        }else{
          setError(finalRes.err)
          toast.error(finalRes.err.name)
        }
      })
    }
    else{
      axios.post(`${apiBaseUrl}color/create`,obj)   // frontend ka data backend transfer
      .then((res)=>res.data)   //backend se response aayega jisme data naam ki key h
      .then((finalRes)=>{
        if(finalRes.status){
          //color add
          setError(null)
          toast.success(finalRes.message)
          setTimeout(
            ()=>{
              navigate("/color/view")
            },2000
          )        
        }else{
          setError(finalRes.err)
          toast.error(finalRes.err.name)
        }
      })
    }
  }

  useEffect(()=>{
    if(id){
      axios.get(`${apiBaseUrl}color/details/${id}`)
      .then((res)=>res.data)
      .then((finalRes)=>{
          // console.log(finalRes);       
          let {name,order,code} = finalRes.data;   
          setColorName(name)
          setColorOrder(order)
          setColorCode(code)     
        }
      )
    }
    else{
      setColorName("")
      setColorOrder("")
      setColorCode("#000")
    }  
  },[id])
  return (
    <>
      <section className="p-5 min-h-[610px]">
        <ToastContainer/>
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            {
              id ? <span className="font-semibold text-2xl">Update Colors</span>:<span className="font-semibold text-2xl">Add Colors</span>
            }          
          </div>
          <form onSubmit={handleSubmit} className="p-2">
            <div className="w-full flex flex-col mb-3">
                <label className="font-medium">Color Name</label>
                <input 
                  type="text" 
                  value={colorName}
                  placeholder="Enter Color Name" 
                  onChange={(e)=>setColorName(e.target.value)}
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required 
                  list="suggestions"  
                />

                <datalist id="suggestions" >
                    <option value="red"></option>
                    <option value="blue"></option>
                    <option value="yellow"></option>
                </datalist>
                {
                  error?.name && <span className="text-red-600 text-[12px]">{error.name}</span>
                }
            </div>


            <div className="w-full flex flex-col mb-3">
                <label className=" font-medium">Color Picker</label>
                < ColorPicker 
                color = {colorCode}
                onChange={(updatedColor) => setColorCode(updatedColor.hex)}
                />
                {
                  error?.code && <span className="text-red-600 text-[12px]">{error.code}</span>
                }
            </div>


            <div className="w-full flex flex-col mb-20">
                <label className=" font-medium">Order</label>
                <input 
                  type="number" 
                  placeholder="Enter Order" 
                  value={colorOrder}
                  onChange={(e)=>setColorOrder(e.target.value)}
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required
                />
                {
                  error?.order && <span className="text-red-600 text-[12px]">{error.order}</span>
                }
            </div>

            <button 
              type="submit" 
              className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold mb-10 hover:cursor-pointer"
            >
              {id ? "Update" : "Add"} Color
            </button>

          </form>
         
        </div>
      </section>
    </>
  );
}
