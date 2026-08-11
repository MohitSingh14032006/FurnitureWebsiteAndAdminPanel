import React from "react";

export default function AddChooseUs() {
  return (
    <>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Why Choose Us / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">Add Why Choose Us</span>
          </div>
          <div className="p-4 grid grid-cols-[30%_auto] gap-3">
            <form action="">
              <div className="w-full flex flex-col mb-3">
                <label htmlFor="" className=" font-medium">
                  Choose Image
                </label>
                <input
                  type="file"
                  className="border-1 border-gray-400 h-[250px] p-2 text-gray-400 font-semibold"
                />
              </div>
            </form>

            <form action="" className="p-2">
              <div className="w-full flex flex-col mb-3">
                <label htmlFor="" className=" font-medium">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="border-1 border-gray-400 rounded-lg p-2"
                />
              </div>
              <div className="w-full flex flex-col mb-3">
                <label htmlFor="" className=" font-medium">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  placeholder="Color"
                  className="border-1 border-gray-400 rounded-lg p-2"
                />
              </div>
              <div className="w-full flex flex-col mb-20">
                <label htmlFor="" className=" font-medium">
                  Description
                </label>
                <textarea name="" id="" className="w-full h-[100px] border-1 border-gray-400 resize-none rounded-lg p-2"></textarea>
              </div>
            </form>
          </div>
          <button
            type="button"
            className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold ml-5 mb-10"
          >
            Add Category
          </button>
        </div>
      </section>
    </>
  );
    
}