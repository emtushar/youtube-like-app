import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../store/slices/videoSlice";
import { useEffect } from "react";

export function usePopularVideos() {
  const dispatch = useDispatch();
  const popularVideos = useSelector((state) => state.video.popularVideos);
  const fetchMostPopularVideos = async () => {
    try {
      if (popularVideos) return null;
      const data = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/fetch/popular-videos"
      );
      const response = await data.json();
      dispatch(addPopularVideos(response.items));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMostPopularVideos();
  });
}
