import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import { BsFire } from "react-icons/bs";
function SideBar() {
  return (
    <div className="w-18 md:w-72 bg-gray-100 shadow-lg text-2xl p-4 ">
      <ul>
        <Link to={"/"}>
          <li className="p-3 flex items-center gap-3  cursor-pointer  hover:bg-gray-200 mb-4">
            <FaHome />
            <span className="hidden md:inline">Home</span>
          </li>
        </Link>
        <Link to={"/trending"}>
          <li className="p-3 flex items-center gap-3  cursor-pointer hover:bg-gray-200 mb-4">
            <BsFire />
            <span className="hidden md:inline">Trending</span>
          </li>
        </Link>
        <Link to={"/popular-videos"}>
          <li className="p-3  flex items-center gap-3 cursor-pointer hover:bg-gray-200 mb-4">
            <MdOndemandVideo />
            <span className="hidden md:inline">Popular</span>
          </li>
        </Link>
        <Link to={"/live-videos"}>
          <li className="p-3  flex items-center gap-3 cursor-pointer hover:bg-gray-200 mb-4">
            <PiBroadcastFill />{" "}
            <span className="hidden md:inline">Live News</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
