import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSuggestion } from "../hooks/useSuggestion";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenuState = () => dispatch(toggleMenu());
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionState, setSuggestionState] = useState(false);
  const suggestions = useSelector((state) => state.suggestion);
  useSuggestion(searchQuery);
  function handleSuggestionClick(e) {
    setSearchQuery(e.target.textContent);
  }
  function handleSearchClick() {
    if (!searchQuery) {
      return null;
    }
    navigate("/search?q=" + searchQuery);
  }
  return (
    <div className="w-full p-2 px-8  shadow-lg flex  items-center justify-between ">
      <div className="flex gap-5 items-center">
        <img
          className="lg:h-4 lg:w-6 h-4 w-4 cursor-pointer "
          src="https://e7.pngegg.com/pngimages/436/707/png-clipart-hamburger-button-computer-icons-menu-menu-food-text-thumbnail.png"
          alt="hamburger-icon"
          onClick={toggleMenuState}
        />
        <Link to={"/"}>
          <img
            className="hidden lg:block h-6 w-28  cursor-pointer"
            src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png"
            alt="youtube-logo"
          />
        </Link>
      </div>

      <div className="flex flex-col w-[70%]  lg:w-[40%]  ">
        <div className=" flex items-center">
          <input
            className="border-2 border-gray-300 text-sm lg:text-base  p-1 px-3  lg:p-3 md:px-5 rounded-l-full  w-full "
            type="text"
            name=""
            id=""
            placeholder="What do yo wanna see?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSuggestionState(true)}
            onBlur={() => {
              setTimeout(() => {
                setSuggestionState(false);
              }, 200);
            }}
          />
          <button
            onClick={handleSearchClick}
            className="p-1 px-3  lg:p-3 lg:px-5 border-2 border-gray-300 border-l-0 bg-gray-200 rounded-r-full"
          >
            <img
              className="md:w-6 md:h-6 h-5 w-5"
              src="https://e7.pngegg.com/pngimages/506/609/png-clipart-computer-icons-web-search-engine-search-magnifying-glass-angle-zooming-user-interface-thumbnail.png"
              alt="search-icon"
            />
          </button>
        </div>
        {suggestionState && (
          <ul
            className={
              "w-[570px] absolute drop-shadow-lg  mt-14 ml-2  rounded-lg bg-white  "
            }
          >
            {suggestions &&
              suggestions[searchQuery]?.map((s) => (
                <Link to={"/search?q=" + s}>
                  <li
                    onClick={handleSuggestionClick}
                    className="text-base p-2 px-6  hover:bg-gray-200"
                  >
                    {s}
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>

      <div className="flex  gap-20">
        <img
          className="h-8 w-8"
          src="https://banner2.cleanpng.com/20180404/sqe/avhxkafxo.webp"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
