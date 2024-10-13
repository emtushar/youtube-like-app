import React from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useSearchResults } from "../hooks/useSearchResults";
import VideoCard from "./VideoCard";

function SearchPage() {
  const [searchParams] = useSearchParams();
  useSearchResults(searchParams.get("q"));
  const searchedResults = useSelector((state) => state.video.searchedResults);
  return (
    <div className="w-full p-10 bg-white flex flex-wrap gap-4 overflow-y-auto">
      {searchedResults
        ? searchedResults.map((v) => (
            <Link key={v?.id?.videoId} to={"/watch?v=" + v.id.videoId}>
              <VideoCard
                title={v.snippet.title}
                channelName={v.snippet.channelTitle}
                thumbnail={v.snippet.thumbnails.medium.url}
                viewsCount={"34567"}
                publishedAt={v.snippet.publishedAt}
              />
            </Link>
          ))
        : null}
    </div>
  );
}

export default SearchPage;
