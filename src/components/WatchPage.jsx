import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/slices/appSlice";
import { useDispatch } from "react-redux";
import Recommandation from "./Recommandation";
function WatchPage() {
  const [searchParams] = useSearchParams();
  const [toSearch, setToSearch] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(closeMenu());
  async function getVideoTitle() {
    try {
      const data = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "/api/fetch/video-by-id/" +
          searchParams.get("v")
      );
      const response = await data.json();
      const title = response?.items[0]?.snippet?.title || "";
      setToSearch(title);
    } catch (error) {
      navigate("/error");
    }
  }
  useEffect(() => {
    getVideoTitle();
  }, [searchParams]);
  return (
    <div className="md:p-8 p-2 bg-white w-full flex flex-col">
      <div className="flex md:flex-row flex-col w-full  overflow-y-auto overflow-x-hidden">
        <div className="flex ">
          <iframe
            className={
              "md:mr-8 md:ml-16  rounded-lg w-full h-[280px] md:w-[950px] md:h-[550px]"
            }
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex overflow-y-auto overflow-x-hidden">
          <Recommandation isLivePage={false} searchQuery={toSearch} />
        </div>
      </div>
      <div>
        <h2>Comments</h2>
      </div>
    </div>
  );
}

export default WatchPage;