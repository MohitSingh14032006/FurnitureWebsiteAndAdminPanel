import React from "react";

export default function AddSubCategories() {
  return (
    <>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Sub Category / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="p-5 min-h-[610px]">
        <div className="overflow-x-auto shadow-xs rounded-lg border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-gray-400">
            <span className="font-semibold text-2xl">Add Sub Category</span>
          </div>
          <div className="p-4 grid grid-cols-[30%_auto] gap-3">
            <form action="">
              <div className="w-full flex flex-col mb-3">
                <label htmlFor="" className=" font-medium">
                  Category Image
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
                  Parent Category Name
                </label>
                <select name="" id="" className="w-full p-2 border-1 border-gray-400 rounded-lg">
                    <option value="">Select Category</option>
                    <option value="">Men's</option>
                    <option value="">Women</option>
                    <option value="">Sale</option>
                </select>
              </div>
              <div className="w-full flex flex-col mb-3">
                <label htmlFor="" className=" font-medium">
                  Category Name
                </label>
                <input
                  type="text"
                  name="color"
                  placeholder="Category Name"
                  className="border-1 border-gray-400 rounded-lg p-2"
                />
              </div>
              <div className="w-full flex flex-col mb-20">
                <label htmlFor="" className=" font-medium">
                  Order
                </label>
                <input
                  type="number"
                  placeholder="Category Order"
                  name="order"
                  className="border-1 border-gray-400 rounded-lg p-2"
                />
              </div>
            </form>
          </div>
          <button
            type="submit"
            onSubmit="changeFinally"
            className="p-[8px_16px] bg-purple-600 hover:bg-purple-700 rounded-lg text-stone-50 font-semibold ml-5 mb-10"
          >
            Add Category
          </button>
        </div>
      </section>
    </>
  );
}
