import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Container from "./components/Container";
import LiveVideos from "./components/LiveVideos";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import WatchLivePage from "./components/WatchLivePage";
import ErrorComponent from "./components/ErrorComponent";
import Trending from "./components/Trending";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Container />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/live-videos",
          element: <LiveVideos />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/trending",
          element: <Trending />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/watch-live",
          element: <WatchLivePage />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/search",
          element: <SearchPage />,
          errorElement: <ErrorComponent />,
        },
        {
          path: "/popular-videos",
          element: <Container />,
          errorElement: <ErrorComponent />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <React.StrictMode>
          <Body />
        </React.StrictMode>
      </RouterProvider>
    </Provider>
  );
}

export default App;
