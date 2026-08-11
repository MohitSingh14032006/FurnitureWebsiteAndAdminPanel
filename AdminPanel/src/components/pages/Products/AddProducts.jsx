import React from "react";

export default function AddProducts() {
  return (
    <>
      <section className="w-full p-2">
        <span className="text-gray-700 font-medium text-lg">
          Home / Product / Add
        </span>
      </section>
      <hr className="text-gray-500 m-1" />

      <section className="w-full p-5 flex flex-col">
        <form className="grid grid-cols-3 gap-2 mb-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Product Image
              </label>
              <input
                type="file"
                className="p-1 h-[170px] border-1 border-gray-400 text-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Back Image
              </label>
              <input
                type="file"
                className="p-1 h-[170px] border-1 border-gray-400 text-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Gallery Image
              </label>
              <input
                type="file"
                className="p-1 h-[170px] border-1 border-gray-400 text-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="border-1 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Sub Category
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Select Category</option>
                <option value="">Mobile Phones</option>
                <option value="">Laptops</option>
                <option value="">Men's Wear</option>
                <option value="">Women's Wear</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Material
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Neem</option>
                <option value="">Babbul</option>
                <option value="">Neem</option>
                <option value="">Babbul</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Product Type{" "}
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Featured</option>
                <option value="">New Arrivals</option>
                <option value="">Onsale</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Is Top Rated
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Actual Price
              </label>
              <input
                type="text"
                placeholder="Actual Price"
                className="border-1 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Total In Stocks
              </label>
              <input
                type="text"
                placeholder="Total In Stocks"
                className="border-1 border-gray-400 p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Parent Category
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Mobile Phones</option>
                <option value="">Laptops</option>
                <option value="">Men's Wear</option>
                <option value="">Women's Wear</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Sub Sub Category
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Mobile Phones</option>
                <option value="">Laptops</option>
                <option value="">Men's Wear</option>
                <option value="">Women's Wear</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Select Color
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Red</option>
                <option value="">Blue</option>
                <option value="">Green</option>
                <option value="">Gray</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Is Best Selling
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Is Upsell
              </label>
              <select
                name=""
                id=""
                className="border-1 border-gray-400 p-2 rounded-lg"
              >
                <option value="">Nothing Selected</option>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Sale Price
              </label>
              <input
                type="text"
                placeholder="Sale Price"
                className="border-1 border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-medium">
                Order
              </label>
              <input
                type="text"
                placeholder="Order"
                className="border-1 border-gray-400 p-2 rounded-lg"
              />
            </div>
          </div>
        </form>
        <form action="">
          <label htmlFor="" className="font-medium">Description</label>
          <div className="w-full bg-neutral-secondary-medium border-1 border-gray-400 rounded-base mb-5">
            <div className="p-2 border-b border-gray-400">
              <div className="flex flex-wrap items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                  <button
                    id="toggleBoldButton"
                    data-tooltip-target="tooltip-bold"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                      />
                    </svg>
                    <span className="sr-only">Bold</span>
                  </button>
                  <div
                    id="tooltip-bold"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Toggle bold
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleItalicButton"
                    data-tooltip-target="tooltip-italic"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                      />
                    </svg>
                    <span className="sr-only">Italic</span>
                  </button>
                  <div
                    id="tooltip-italic"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Toggle italic
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleUnderlineButton"
                    data-tooltip-target="tooltip-underline"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        strokeWidth={2}
                        d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
                      />
                    </svg>
                    <span className="sr-only">Underline</span>
                  </button>
                  <div
                    id="tooltip-underline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Toggle underline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleStrikeButton"
                    data-tooltip-target="tooltip-strike"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"
                      />
                    </svg>
                    <span className="sr-only">Strike</span>
                  </button>
                  <div
                    id="tooltip-strike"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Toggle strike
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleHighlightButton"
                    data-tooltip-target="tooltip-highlight"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        strokeWidth={2}
                        d="M9 20H5.5c-.27614 0-.5-.2239-.5-.5v-3c0-.2761.22386-.5.5-.5h13c.2761 0 .5.2239.5.5v3c0 .2761-.2239.5-.5.5H18m-6-1 1.42 1.8933c.04.0534.12.0534.16 0L15 19m-7-6 3.9072-9.76789c.0335-.08381.1521-.08381.1856 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3.00001h4"
                      />
                    </svg>
                    <span className="sr-only">Highlight</span>
                  </button>
                  <div
                    id="tooltip-highlight"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Toggle highlight
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleCodeButton"
                    type="button"
                    data-tooltip-target="tooltip-code"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                      />
                    </svg>
                    <span className="sr-only">Code</span>
                  </button>
                  <div
                    id="tooltip-code"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Format code
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleLinkButton"
                    data-tooltip-target="tooltip-link"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                      />
                    </svg>
                    <span className="sr-only">Link</span>
                  </button>
                  <div
                    id="tooltip-link"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Add link
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="removeLinkButton"
                    data-tooltip-target="tooltip-remove-link"
                    type="button"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        strokeWidth={2}
                        d="M13.2131 9.78732c-.6359-.63557-1.4983-.99259-2.3974-.99259-.89911 0-1.76143.35702-2.39741.99259l-3.4253 3.42528C4.35719 13.8485 4 14.7108 4 15.61c0 .8992.35719 1.7616.99299 2.3974.63598.6356 1.4983.9926 2.39742.9926.89912 0 1.76144-.357 2.39742-.9926l.32157-.3043m-.32157-4.4905c.63587.6358 1.49827.993 2.39747.993.8991 0 1.7615-.3572 2.3974-.993l3.4243-3.42528c.6358-.63585.993-1.49822.993-2.39741 0-.89919-.3572-1.76156-.993-2.39741C17.3712 4.357 16.509 4 15.6101 4c-.899 0-1.7612.357-2.397.9925l-1.0278.96062m7.3873 14.04678-1.7862-1.7862m0 0L16 16.4274m1.7864 1.7863 1.7862-1.7863m-1.7862 1.7863L16 20"
                      />
                    </svg>
                    <span className="sr-only">Remove link</span>
                  </button>
                  <div
                    id="tooltip-remove-link"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Remove link
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleTextSizeButton"
                    data-dropdown-toggle="textSizeDropdown"
                    type="button"
                    data-tooltip-target="tooltip-text-size"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
                      />
                    </svg>
                    <span className="sr-only">Text size</span>
                  </button>
                  <div
                    id="tooltip-text-size"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Text size
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <div
                    id="textSizeDropdown"
                    className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72"
                  >
                    <ul
                      className="p-2 space-y-1 text-sm text-body font-medium"
                      aria-labelledby="toggleTextSizeButton"
                    >
                      <li>
                        <button
                          data-text-size="16px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                        >
                          16px (Default)
                        </button>
                      </li>
                      <li>
                        <button
                          data-text-size="12px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-xs"
                        >
                          12px (Tiny)
                        </button>
                      </li>
                      <li>
                        <button
                          data-text-size="14px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                        >
                          14px (Small)
                        </button>
                      </li>
                      <li>
                        <button
                          data-text-size="18px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-lg"
                        >
                          18px (Lead)
                        </button>
                      </li>
                      <li>
                        <button
                          data-text-size="24px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-2xl"
                        >
                          24px (Large)
                        </button>
                      </li>
                      <li>
                        <button
                          data-text-size="36px"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-4xl"
                        >
                          36px (Huge)
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button
                    id="toggleTextColorButton"
                    data-dropdown-toggle="textColorDropdown"
                    type="button"
                    data-tooltip-target="tooltip-text-color"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        strokeWidth={2}
                        d="m6.08169 15.9817 1.57292-4m-1.57292 4h-1.1m1.1 0h1.65m-.07708-4 2.72499-6.92967c.0368-.09379.1673-.09379.2042 0l2.725 6.92967m-5.65419 0h-.00607m.00607 0h5.65419m0 0 .6169 1.569m5.1104 4.453c0 1.1025-.8543 1.9963-1.908 1.9963s-1.908-.8938-1.908-1.9963c0-1.1026 1.908-4.1275 1.908-4.1275s1.908 3.0249 1.908 4.1275Z"
                      />
                    </svg>
                    <span className="sr-only">Text color</span>
                  </button>
                  <div
                    id="tooltip-text-color"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Text color
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <div
                    id="textColorDropdown"
                    className="z-10 hidden w-48 rounded-sm bg-neutral-primary-soft p-2 shadow-sm"
                  >
                    <div className="grid grid-cols-6 gap-2 group mb-3 items-center p-1.5 rounded hover:bg-neutral-tertiary">
                      <input
                        type="color"
                        id="color"
                        defaultValue="#e66465"
                        className="border-default-medium
                   border bg-neutral-tertiary rounded p-px px-1 w-full h-8 col-span-3"
                      />
                      <label
                        htmlFor="color"
                        className="text-body text-xs font-medium col-span-3 group-hover:text-heading"
                      >
                        Pick a color
                      </label>
                    </div>
                    <div className="grid grid-cols-6 gap-1 mb-3">
                      <button
                        type="button"
                        data-hex-color="#1A56DB"
                        style={{ backgroundColor: "#1A56DB" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#0E9F6E"
                        style={{ backgroundColor: "#0E9F6E" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Green</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#FACA15"
                        style={{ backgroundColor: "#FACA15" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Yellow</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F05252"
                        style={{ backgroundColor: "#F05252" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Red</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#FF8A4C"
                        style={{ backgroundColor: "#FF8A4C" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Orange</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#0694A2"
                        style={{ backgroundColor: "#0694A2" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Teal</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#B4C6FC"
                        style={{ backgroundColor: "#B4C6FC" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light indigo</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#8DA2FB"
                        style={{ backgroundColor: "#8DA2FB" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Indigo</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#5145CD"
                        style={{ backgroundColor: "#5145CD" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Purple</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#771D1D"
                        style={{ backgroundColor: "#771D1D" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Brown</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#FCD9BD"
                        style={{ backgroundColor: "#FCD9BD" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light orange</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#99154B"
                        style={{ backgroundColor: "#99154B" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Bordo</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#7E3AF2"
                        style={{ backgroundColor: "#7E3AF2" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Dark Purple</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#CABFFD"
                        style={{ backgroundColor: "#CABFFD" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#D61F69"
                        style={{ backgroundColor: "#D61F69" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Dark Pink</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F8B4D9"
                        style={{ backgroundColor: "#F8B4D9" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Pink</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F6C196"
                        style={{ backgroundColor: "#F6C196" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Cream</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#A4CAFE"
                        style={{ backgroundColor: "#A4CAFE" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#5145CD"
                        style={{ backgroundColor: "#5145CD" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Dark Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#B43403"
                        style={{ backgroundColor: "#B43403" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Orange Brown</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#FCE96A"
                        style={{ backgroundColor: "#FCE96A" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light Yellow</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#1E429F"
                        style={{ backgroundColor: "#1E429F" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Navy Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#768FFD"
                        style={{ backgroundColor: "#768FFD" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light Purple</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#BCF0DA"
                        style={{ backgroundColor: "#BCF0DA" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light Green</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#EBF5FF"
                        style={{ backgroundColor: "#EBF5FF" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Sky Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#16BDCA"
                        style={{ backgroundColor: "#16BDCA" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Cyan</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#E74694"
                        style={{ backgroundColor: "#E74694" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Pink</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#83B0ED"
                        style={{ backgroundColor: "#83B0ED" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Darker Sky Blue</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#03543F"
                        style={{ backgroundColor: "#03543F" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Forest Green</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#111928"
                        style={{ backgroundColor: "#111928" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Black</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#4B5563"
                        style={{ backgroundColor: "#4B5563" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Stone</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#6B7280"
                        style={{ backgroundColor: "#6B7280" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Gray</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#D1D5DB"
                        style={{ backgroundColor: "#D1D5DB" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Light Gray</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F3F4F6"
                        style={{ backgroundColor: "#F3F4F6" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Cloud Gray</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F3F4F6"
                        style={{ backgroundColor: "#F3F4F6" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Cloud Gray</span>
                      </button>
                      <button
                        type="button"
                        data-hex-color="#F9FAFB"
                        style={{ backgroundColor: "#F9FAFB" }}
                        className="w-6 h-6 rounded-md"
                      >
                        <span className="sr-only">Heaven Gray</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      id="reset-color"
                      className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none w-full"
                    >
                      Reset color
                    </button>
                  </div>
                  <button
                    id="toggleFontFamilyButton"
                    data-dropdown-toggle="fontFamilyDropdown"
                    type="button"
                    data-tooltip-target="tooltip-font-family"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="m10.5785 19 4.2979-10.92966c.0369-.09379.1674-.09379.2042 0L19.3785 19m-8.8 0H9.47851m1.09999 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.9846h4.4M3 16l1.56685-3.9846m0 0 2.73102-6.94506c.03688-.09379.16738-.09379.20426 0l2.50367 6.94506H4.56685Z"
                      />
                    </svg>
                    <span className="sr-only">Font family</span>
                  </button>
                  <div
                    id="tooltip-font-family"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Font Family
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <div
                    id="fontFamilyDropdown"
                    className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-48"
                  >
                    <ul
                      className="p-2 space-y-1 text-sm text-body font-medium"
                      aria-labelledby="toggleFontFamilyButton"
                    >
                      <li>
                        <button
                          data-font-family="Inter, ui-sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                        >
                          Default
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="Arial, sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          Arial
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="'Courier New', monospace"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: '"Courier New", monospace' }}
                        >
                          Courier New
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="Georgia, serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          Georgia
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="'Lucida Sans Unicode', sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{
                            fontFamily: '"Lucida Sans Unicode", sans-serif',
                          }}
                        >
                          Lucida Sans Unicode
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="Tahoma, sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: "Tahoma, sans-serif" }}
                        >
                          Tahoma
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="'Times New Roman', serif;"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: '"Times New Roman", serif' }}
                        >
                          Times New Roman
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="'Trebuchet MS', sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
                        >
                          Trebuchet MS
                        </button>
                      </li>
                      <li>
                        <button
                          data-font-family="Verdana, sans-serif"
                          type="button"
                          className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm"
                          style={{ fontFamily: "Verdana, sans-serif" }}
                        >
                          Verdana
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="px-1">
                    <span className="block w-px h-4 bg-neutral-quaternary" />
                  </div>
                  <button
                    id="toggleLeftAlignButton"
                    type="button"
                    data-tooltip-target="tooltip-left-align"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
                      />
                    </svg>
                    <span className="sr-only">Align left</span>
                  </button>
                  <div
                    id="tooltip-left-align"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Align left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleCenterAlignButton"
                    type="button"
                    data-tooltip-target="tooltip-center-align"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M8 6h8M6 10h12M8 14h8M6 18h12"
                      />
                    </svg>
                    <span className="sr-only">Align center</span>
                  </button>
                  <div
                    id="tooltip-center-align"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Align center
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                  <button
                    id="toggleRightAlignButton"
                    type="button"
                    data-tooltip-target="tooltip-right-align"
                    className="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary"
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
                        d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
                      />
                    </svg>
                    <span className="sr-only">Align right</span>
                  </button>
                  <div
                    id="tooltip-right-align"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip"
                  >
                    Align right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
              </div>
            </div>
              <div className="px-4 py-2 bg-neutral-primary rounded-b-lg">
              <div
                id="wysiwyg-example"
                className="block w-full h-[250px] px-0 text-sm text-body bg-neutral-primary"
              />
            </div>
          </div>
        </form>
        <button className="p-[8px_16px] w-32 rounded-lg text-stone-50 font-semibold bg-gradient-to-br from-purple-600 to-blue-500 mb-5">
          Add Product
        </button>
      </section>
    </>
  );
}
