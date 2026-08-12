import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";

export default function ViewCategories() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const [showSearch,setShowSearch] = useState(false)
  const [searchCategory,setSearchCategory] = useState("")
  const [searchOrder, setSearchOrder] = useState("")

  let [data, setData] = useState([])
  let [ids,setIds] = useState([])
  let [path,setPath] = useState("")

  let getCategory = () => {
    axios
      .get(`${apiBaseUrl}category/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          // console.log(finalRes);
          setData(finalRes.data);
          setPath(finalRes.path)
        }
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Category / View
        </span>
      </section>
      <hr className="text-gray-500 m-1" />
      {
        showSearch && (
          <div className="bg-white p-3 border-b">
            <div className="flex items-center border w-[700px] rounded-md px-2 py-1">
              <input 
              type="text" 
              placeholder="Search Category" 
              value={searchCategory} 
              onChange={(e)=>setSearchCategory(e.target.value)}
              className="flex-grow px-2 py-1 outline-none"
              />

              <input 
              type="number" 
              placeholder="Search Order" 
              value={searchOrder} 
              onChange={(e)=>setSearchOrder(e.target.value)}
              className="flex-grow px-2 py-1 outline-none"
              />

              <button type="button" onClick={getCategory}
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
            <span className="font-semibold text-2xl">View Category</span>
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
              <button className="bg-green-700 hover:bg-green-800 p-3 rounded-lg text-stone-50 font-semibold hover:cursor-pointer">
                Change Status
              </button>
              <button className="bg-red-700 hover:bg-red-800 p-3 rounded-lg text-stone-50 font-semibold mr-2 hover:cursor-pointer">
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
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px] w-[55%]"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase font-bold text-[12px] "
                >
                  Image
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
                data.map((category)=>{
                  return (
                  <tr key={category.id}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                      />
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-heading">
                    {category.name}
                  </th>
                  <td className="px-6 py-4">
                      <img 
                      src={ path+category.image } 
                      alt={`${category.name} image`}
                      className="w-10 h-10 rounded-full object-cover"/>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{category.order}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        category.status === true ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {category.status === true ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-3 rounded-[50%] bg-sky-700 hover:bg-sky-800 hover:cursor-pointer">
                      <MdEdit className="text-stone-50 text-xl" />
                    </button>
                  </td>
                </tr>

                  )
                })
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
