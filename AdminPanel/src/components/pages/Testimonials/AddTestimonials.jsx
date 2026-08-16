import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";

export default function AddTeastimonials() {
  const inputRef = useRef(null);
  const apiBaseUrl = import.meta.env.VITE_APIBASEURL;

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post(`${apiBaseUrl}testimonial/create`, formData)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setError(null);
          toast.success(finalRes.message);
          setTimeout(() => {
            navigate("/testimonial/view");
          }, 2000);
        } else {
          setError(finalRes.err);
          toast.error(finalRes.err.name || "Something went wrong");
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Upload failed");
      });
  };

  return (
    <>
      <ToastContainer/>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Testimonial / Add 
        </span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">Add Testimonial</span>
          </div>
          <form className="p-3 gap-2 grid grid-cols-[30%_auto]" onSubmit={handleSubmit}>            
            <div className="w-full flex flex-col mb-3">
              <label className="font-medium">Testimonial Image</label>
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const droppedFile = e.dataTransfer.files?.[0];
                  if (droppedFile) {
                    setFile(droppedFile);
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(droppedFile);
                    inputRef.current.files = dataTransfer.files;
                  }
                }}
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 h-72 flex flex-col items-center justify-center text-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              >
                <svg
                  className="w-12 h-12 text-gray-400 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M7 16a4 4 0 01-.88-7.9A5.5 5.5 0 0117.5 8H17a4 4 0 110 8H7zm5-8v7m0 0l-2.5-2.5M12 15l2.5-2.5"
                  />
                </svg>
                <span className="text-sm text-gray-600 font-medium">
                  {file ? file.name : "Click or drag & drop image here"}
                </span>
              </div>
              <input
                ref={inputRef}
                type="file"
                id="fileInput"
                name="image"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="w-full flex flex-col m-1">
              <div className="w-full flex flex-col mb-3">
                <label className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-3 ">
                <label className="font-medium">
                  Designation
                </label>
                <input
                  type="text"
                  placeholder="Designation"
                  name="designation"
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-3">
                <label className="font-medium">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="Rating"
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-3">
                <label className="font-medium">
                  Order
                </label>
                <input
                  type="number"
                  name="order"
                  placeholder="Order"
                  className="border-1 border-gray-400 rounded-lg p-2"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-20">
                <label className="font-medium">
                  Message
                </label>
                <textarea name="message" className='border-1 border-gray-400 rounded-lg p-2 h-[150px] resize-none'></textarea>
              </div>
            </div>
            <button
                type="submit"
                className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold mt-10 hover:cursor-pointer"
              >
                Add Testimonial
            </button>
          </form>   
        </div>
      </section>
    </>
  )
}
