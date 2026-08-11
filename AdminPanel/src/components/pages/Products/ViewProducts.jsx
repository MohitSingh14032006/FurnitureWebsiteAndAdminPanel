import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";

export default function ViewProducts() {
  return (
    <div className="h-[710px]">
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Product / Product Items
        </span>
      </section>
      <hr className="text-gray-500 m-1" />


      <div className="shadow-xs rounded-lg border-1 border-gray-400 m-5">
        <div className="p-3 flex items-center bg-gray-100 border-b border-gray-400">
            <span className="font-semibold text-2xl">Product Items</span>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium uppercase">                  
                Delete
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                S. No.
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Description
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Short Description
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Thumbnails
              </th>
              <th scope="col" className="px-6 py-3  font-medium uppercase">
                Action
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="table-checkbox-9"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label htmlFor="table-checkbox-9" className="sr-only">
                    Table checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Men's</td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4">
                <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className="w-16 h-16 rounded-md object-cover"/>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <RiDeleteBin6Fill className="text-red-600 text-xl"/>  |  <LiaEditSolid className="text-yellow-500 text-xl"/>
                </div>
              </td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="table-checkbox-9"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label htmlFor="table-checkbox-9" className="sr-only">
                    Table checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">Men's</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4 w-[200px]">
                <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className="w-16 h-16 rounded-md object-cover"/>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <RiDeleteBin6Fill className="text-red-600 text-xl"/>  |  <LiaEditSolid className="text-yellow-500 text-xl"/>
                </div>
              </td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="table-checkbox-9"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label htmlFor="table-checkbox-9" className="sr-only">
                    Table checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">Men's</td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4">
                <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className="w-16 h-16 rounded-md object-cover"/>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <RiDeleteBin6Fill className="text-red-600 text-xl"/>  |  <LiaEditSolid className="text-yellow-500 text-xl"/>
                </div>
              </td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="table-checkbox-9"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label htmlFor="table-checkbox-9" className="sr-only">
                    Table checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">Men's</td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4 w-[200px]">
                Lorem ipsum dolor sit...
                <button className="text-blue-600 font-medium">Read More</button>
              </td>
              <td className="px-6 py-4">
                <img src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png" className="w-16 h-16 rounded-md object-cover"/>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <RiDeleteBin6Fill className="text-red-600 text-xl"/>  |  <LiaEditSolid className="text-yellow-500 text-xl"/>
                </div>
              </td>
              <td className="px-6 py-4">Active</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
