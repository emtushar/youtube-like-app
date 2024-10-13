import React from "react";
import { useLiveVideos } from "../hooks/useLiveVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useId } from "react";
function LiveVideos() {
  useLiveVideos();
  const id = useId();
  const liveVideos = useSelector((state) => state.video.liveVideos);
  return (
    <div className="w-full md:p-10 p-2 bg-white flex flex-wrap gap-4 overflow-y-auto">
      {liveVideos
        ? liveVideos.map((v) => (
            <Link key={v?.id + id} to={"/watch-live?v=" + v.id.videoId}>
              <VideoCard
                title={v.snippet.title}
                channelName={v.snippet.channelTitle}
                thumbnail={v.snippet.thumbnails.medium.url}
                viewsCount={"Live"}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default LiveVideos;
