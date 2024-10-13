import { useEffect } from "react";
import { addSuggestion } from "../store/slices/suggestionSlice";
import { useDispatch, useSelector } from "react-redux";

export function useSuggestion(searchQuery) {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.suggestion);
  const fetchAutoSuggestions = async () => {
    try {
      if (suggestions[searchQuery]) return null;
      if (!searchQuery) return null;
      const data = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          "/api/fetch/suggestions/" +
          searchQuery
      );
      const response = await data.json();
      dispatch(addSuggestion({ [searchQuery]: response[1] }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAutoSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
}
