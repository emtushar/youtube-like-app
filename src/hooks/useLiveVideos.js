import { useEffect } from "react";
import { addLiveVideos } from "../store/slices/videoSlice";
import { useDispatch, useSelector } from "react-redux";

export function useLiveVideos() {
  const dispatch = useDispatch();
  const liveVideos = useSelector((state) => state.video.liveVideos);
  const fetchLiveVideos = async () => {
    try {
      if (liveVideos) return null;
      const data = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/fetch/live-news"
      );
      const response = await data.json();
      dispatch(addLiveVideos(response.items));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchLiveVideos();
  });
}
