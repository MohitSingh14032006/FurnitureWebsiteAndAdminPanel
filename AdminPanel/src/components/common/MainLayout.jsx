import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="w-full flex">
      <div className="h-screen w-[19%] overflow-y-auto">
        <SideBar />
      </div>
      <div className="h-screen w-full overflow-y-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
