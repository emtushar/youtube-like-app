import { useDispatch } from "react-redux";
import {
  addSearchResults,
  clearSearchResults,
} from "../store/slices/videoSlice";
import { useEffect } from "react";

export function useSearchResults(searchQuery) {
  const dispatch = useDispatch();
  async function getSearchResult() {
    try {
      console.log(searchQuery);
      const data = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "/api/fetch/search-results/" +
          searchQuery
      );
      const response = await data.json();
      dispatch(addSearchResults(response.items));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearchResult();
    return () => {
      dispatch(clearSearchResults());
    };
  }, [searchQuery]);
}
