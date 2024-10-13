import { useDispatch } from "react-redux";
import {
  addSearchResults,
  clearSearchResults,
} from "../store/slices/videoSlice";
import { useEffect, useCallback } from "react";

export function useSearchResults(searchQuery) {
  const dispatch = useDispatch();

  const getSearchResult = useCallback(async () => {
    try {
      console.log(searchQuery);
      const data = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/fetch/search-results/${searchQuery}`
      );
      const response = await data.json();
      dispatch(addSearchResults(response.items));
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery, dispatch]);

  useEffect(() => {
    getSearchResult();
    return () => {
      dispatch(clearSearchResults());
    };
  }, [getSearchResult, dispatch]);
}
