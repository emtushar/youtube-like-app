import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSearchResults } from "../hooks/useSearchResults";

function Recommandation({ searchQuery, isLivePage = false }) {
  useSearchResults(isLivePage ? "live news" : searchQuery);
  const searchedVideos = useSelector((state) => state.video.searchedResults);

  return (
    <div className="mt-4  bg-white flex flex-col items-center overflow-y-auto overflow-x-hidden scroller   gap-2 ">
      <h2 className="pl-2 md:-ml-44  text-xl text-gray-500 font-mono">
        Recommandations...
      </h2>
      {searchedVideos
        ? searchedVideos.map((v) => (
            <Link
              key={"R" + v?.id?.videoId}
              to={
                isLivePage
                  ? "/watch-live?v=" + v.id.videoId
                  : "/watch?v=" + v.id.videoId
              }
            >
              <VideoCard
                title={v.snippet.title}
                channelName={v.snippet.channelTitle}
                thumbnail={v.snippet.thumbnails.medium.url}
                viewsCount={isLivePage ? "Live" : v?.statistics?.viewCount}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default Recommandation;
