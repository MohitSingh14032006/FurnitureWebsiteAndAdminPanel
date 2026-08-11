import React from "react";
import { MdEdit } from "react-icons/md";

export default function ViewSlider() {
  return (
    <>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Slider / View
        </span>
      </section>
      <hr className="text-gray-500 m-1" />
      <section className="p-5 min-h-[610px]">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-lg border border-1 border-gray-400 ">
          <div className="p-3 flex items-center justify-between bg-gray-100 border-b border-gray-400">
            <span className="font-semibold text-2xl">View Slider</span>
            <div className="flex gap-3">
              <button className="bg-green-700 hover:bg-green-800 p-3 rounded-lg text-stone-50 font-semibold">
                Change Status
              </button>
              <button className="bg-red-700 hover:bg-red-800 p-3 rounded-lg text-stone-50 font-semibold mr-2">
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
                      id="table-checkbox-20"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label htmlFor="table-checkbox-20" className="sr-only">
                      Table checkbox
                    </label>
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
              <tr>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="table-checkbox-21"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label htmlFor="table-checkbox-21" className="sr-only">
                      Table checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading">
                  Neil Sims
                </th>
                <td className="px-6 py-4">
                  <img
                    src="https://packshifts.in/images/iso.png"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 text-gray-500">1</td>
                <td className="px-6 py-4">
                  <button className="p-[8px_16px] bg-green-500 hover:bg-green-600 text-stone-50 font-semibold rounded-lg">
                    Active
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="p-3 rounded-[50%] bg-sky-700 hover:bg-sky-800">
                    <MdEdit className="text-stone-50 text-xl" />
                  </button>
                </td>
              </tr>

              <tr>
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="table-checkbox-21"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label htmlFor="table-checkbox-21" className="sr-only">
                      Table checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-heading">
                  Neil Sims
                </th>
                <td className="px-6 py-4">
                  <img
                    src="https://packshifts.in/images/iso.png"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 text-gray-500">1</td>
                <td className="px-6 py-4">
                  <button className="p-[8px_16px] bg-red-500 hover:bg-red-600 text-stone-50 font-semibold rounded-lg">
                    Deactive
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="p-3 rounded-[50%] bg-sky-700 hover:bg-sky-800">
                    <MdEdit className="text-stone-50 text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
