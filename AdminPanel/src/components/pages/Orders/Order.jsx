import React from "react";

export default function Order() {
  return (
    <div className="h-[610px]">
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">Home / Orders</span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="relative overflow-x-auto  shadow-xs rounded-lg border-1 border-gray-400 m-5">
        <div className="bg-gray-100 p-3 border-b border-gray-400">
          <span className="text-2xl font-medium">Order's List</span>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
              <th scope="col" className="p-4">
                <button className="p-[8px_16px] bg-gradient-to-br from-purple-600 to-blue-500 text-stone-50 rounded-lg">
                  Delete
                </button>
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                S. No.
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Price
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium uppercase">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="table-checkbox-56"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                  />
                  <label htmlFor="table-checkbox-56" className="sr-only">
                    Table checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Frank 01</td>
              <td className="px-6 py-4">Roshan Chaurasia</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">₹ 3500</td>
              <td className="px-6 py-4">10/06/2024</td>
              <td className="px-6 py-4">Processing...</td>
              <td className="px-6 py-4">
                {/* Modal toggle */}
                <button
                  href="#"
                  type="button"
                  data-modal-show="editUserModal"
                  className="font-medium text-fg-brand hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Main modal */}
        <div
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 className="text-lg font-medium text-heading">
                  Create new product
                </h3>
                <button
                  type="button"
                  className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="editUserModal"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form action="#">
                <div className="grid gap-4 grid-cols-2 py-4 md:py-6">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                      placeholder="Bonnie Green"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="position"
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                      placeholder="React Developer"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Status
                    </label>
                    <select
                      id="category"
                      className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body"
                    >
                      <option selected="">Online</option>
                      <option value="offline">Offline</option>
                      <option value="archived">Archived</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="biography"
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Biography
                    </label>
                    <textarea
                      id="biography"
                      rows={4}
                      className="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
                      placeholder="Write a short biography here"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-t border-default pt-4 md:pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Update user
                  </button>
                  <button
                    data-modal-hide="crud-modal"
                    type="button"
                    className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
