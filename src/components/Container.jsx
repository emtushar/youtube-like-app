import React from "react";
import { usePopularVideos } from "../hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Container() {
  usePopularVideos();
  const popularVideos = useSelector((state) => state.video.popularVideos);
  return (
    <div className="w-full md:p-10 p-2 bg-white flex flex-wrap gap-4 overflow-y-auto">
      {popularVideos
        ? popularVideos.map((v) => (
            <Link key={v?.id} to={"/watch?v=" + v.id}>
              <VideoCard
                title={v.snippet.title}
                channelName={v.snippet.channelTitle}
                thumbnail={v.snippet.thumbnails.medium.url}
                viewsCount={v.statistics.viewCount}
                publishedAt={v.snippet.publishedAt}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default Container;
