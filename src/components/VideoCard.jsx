import React from "react";
import { useSelector } from "react-redux";
import aveta from "aveta";
import { timeAgo } from "../utils/helper";
function VideoCard({ channelName, title, thumbnail, viewsCount, publishedAt }) {
  const { isMenuOpen } = useSelector((state) => state.app);
  return (
    <div
      className={
        isMenuOpen ? "md:w-[440px] " : "md:w-96 " + "bg-white rounded-lg "
      }
    >
      <img
        className="w-screen rounded-lg "
        src={thumbnail}
        alt="video-thumbnail"
      />

      <div className="p-1 flex gap-3 mt-4">
        <img
          className="h-6 w-6 md:h-8 md:w-8"
          src="https://banner2.cleanpng.com/20180404/sqe/avhxkafxo.webp"
          alt="channel-thumbnail"
        />
        <div>
          <h2 className="md:text-base text-sm font-medium">{title}</h2>
          <p className="text-gray-600 md:text-base text-sm">{channelName}</p>
          <div className="flex gap-2 items-center">
            <span className="md:text-base text-sm ">
              {isNaN(viewsCount) ? viewsCount : aveta(viewsCount) + " views"}
            </span>
            <span className="md:text-base text-sm">{timeAgo(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
