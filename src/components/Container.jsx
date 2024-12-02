import React, { useState, useEffect } from "react";
import { usePopularVideos } from "../hooks/usePopularVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Container() {
  const [loading, setLoading] = useState(true);
  usePopularVideos();
  const popularVideos = useSelector((state) => state.video.popularVideos);
  useEffect(() => {
    if (popularVideos) {
      setLoading(false);
    }
  }, [popularVideos]);
  return (
    <div className="w-full lg:p-10 p-2 bg-white flex flex-wrap gap-4 overflow-y-auto">
      {!loading ? (
        popularVideos.map((v) => (
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
      ) : (
        <div>
          <h2 className="text-3xl mx-auto font-bold text-stone-700 ">
            Loading....
          </h2>
        </div>
      )}
    </div>
  );
}

export default Container;
