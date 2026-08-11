import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="w-full">
      <div className="p-3 flex justify-between items-center">
        <div className="flex gap-4 items-center">
            <RxHamburgerMenu className="text-xl"></RxHamburgerMenu>
            <span className="font-semibold text-gray-500 text-xl">Dashboard</span>
        </div>
        <figure>
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-12 h-12 rounded-full object-cover"/>
        </figure>
      </div>
      <hr className="text-gray-500 m-1"/>
    </header>
  );
}
