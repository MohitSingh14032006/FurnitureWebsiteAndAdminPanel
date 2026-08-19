import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router";
import { FaFilterCircleXmark } from "react-icons/fa6";

export default function ViewColors() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const [showSearch,setShowSearch] = useState(false);
  const [searchName,setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [searchOrder,setSearchOrder] = useState("");

  let [data, setData] = useState([]);
  let [ids,setIds] = useState([]);

  let getProduct = () => {
    axios
      .get(`${apiBaseUrl}color/view`,{
        params:{
          name: searchName,
          code: searchCode,
          order: searchOrder
        }
      })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          // console.log(finalRes);
          setData(finalRes.data);
        }
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  let getChangeProduct = (e) =>{
    let checkValue = e.target.value
    if(e.target.checked){
      setIds([...ids,checkValue])
    }else{
      setIds(ids.filter((v)=>v!=checkValue))
    }      
  }

  let allSelect=(e)=>{
    if(e.target.checked){
        setIds(data.map((obj)=>obj._id))
    }else{
        setIds([])
    }      
  }

  let multiDelete = () =>{
    if(ids.length>=1){
      let obj = {
        ids
      }
      axios.post(`${apiBaseUrl}color/multidelete`,obj)   //frontend se backend data object ki form me jaata h
      .then((res)=>res.data)
      .then((finalRes)=>{
        if(finalRes.status){
          toast.success(finalRes.message)
          getProduct();
        }else{
        }        
      })
    }
    else{
      toast.warning("Please select atleast one checkbox.")
    }
  }

  let changeStatus = () =>{
    if(ids.length>=1){
      let obj = {
        ids
      }
      axios.post(`${apiBaseUrl}color/changeStatus`,obj)   //frontend se backend data object ki form me jaata h
      .then((res)=>res.data)
      .then((finalRes)=>{
        if(finalRes.status){
          toast.success(finalRes.message)
          getProduct();
        }else{
        }        
      })
    }
    else{
      toast.warning("Please select atleast one checkbox.")
    }
  }

  return (
    <>
      <section className="w-full p-2">
        <ToastContainer/>
        <span className="text-gray-700 font-medium text-lg">
          Home / Color / View
        </span>
      </section>
      <hr className="text-gray-500 m-1" />
      {
        showSearch && (
          <div className="bg-white p-3 border-b">
            <div className="flex items-center border w-[700px] rounded-md px-2 py-1">
              <input 
              type="text" 
              placeholder="Search Name" 
              value={searchName} 
              onChange={(e)=>setSearchName(e.target.value)}
              className="flex-grow px-2 py-1 "
              />

              <input 
              type="text" 
              placeholder="Search Code" 
              value={searchCode} 
              onChange={(e)=>setSearchCode(e.target.value)}
              className="flex-grow px-2 py-1 outline-none"
              />

              <input 
              type="number" 
              placeholder="Search Order" 
              value={searchOrder} 
              onChange={(e)=>setSearchOrder(e.target.value)}
              className="flex-grow px-2 py-1 outline-none"
              />

              <button type="button" onClick={getProduct}
              className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">
                &#128269;
              </button>
            </div>
          </div>
        )
      }
      <section className="p-5 min-h-[610px]">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-b border-gray-400">
            <span className="font-semibold text-2xl">View Color</span>
            <div className="flex gap-3">
              <button onClick={()=>setShowSearch(!showSearch)}
              className="bg-sky-700 hover:bg-sky-800 p-[8px_16px] rounded-lg hover:cursor-pointer">              
                {
                  showSearch ? 
                  <FaFilterCircleXmark className=" text-stone-50 text-2xl" />                   
                  : 
                  <FaFilter className=" text-stone-50 text-lg" />
                }
              </button>
              <button 
              className="bg-green-700 hover:bg-green-800 p-3 rounded-lg text-stone-50 font-semibold hover:cursor-pointer"
              onClick={changeStatus}>
                Change Status
              </button>
              <button 
              className="bg-red-700 hover:bg-red-800 p-3 rounded-lg text-stone-50 font-semibold mr-2 hover:cursor-pointer"
              onClick={multiDelete}>
                Delete
              </button>
            </div>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-medium">
              <tr className="bg-gray-50">
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={allSelect}
                      checked={data.length == ids.length}
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px] w-[55%]"
                >
                  Color Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px]"
                >
                  Code
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px]"
                >
                  Order
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px]"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px]"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
              data.map((obj, index) => (
                <tr key={index} className={index%2 === 0 ? "bg-white":"bg-gray-100"}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        key={`${index}`}
                        onChange={getChangeProduct}
                        value={obj._id}
                        checked={ids.includes(obj._id)}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                      />
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading"
                  >
                    {obj.name}
                  </th>
                  <td className="px-6 py-4 text-gray-500">{obj.code}</td>
                  <td className="px-6 py-4 text-gray-500">{obj.order}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        obj.status === true ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {obj.status === true ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/color/update/${obj._id}`}>
                      <button className="p-3 rounded-[50%] bg-sky-700 hover:bg-sky-800 hover:cursor-pointer">
                        <MdEdit className="text-stone-50 text-xl"/>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
