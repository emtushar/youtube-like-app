import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";
function Body() {
  const { isMenuOpen } = useSelector((state) => state.app);

  return (
    <div className=" flex flex-col w-full h-screen overflow-hidden">
      <Header />
      <div className="flex  flex-1 bg-red-900 w-full overflow-hidden">
        {isMenuOpen ? <SideBar /> : null}
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
