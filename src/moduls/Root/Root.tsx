import "./Root.css";
import AllFilmsPage from "./AllFilmsPage/AllFilmsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilmPage from "./AllFilmsPage/FilmPage/FilmPage";

const router = createBrowserRouter([
  {
    path: "films/",
    element: <AllFilmsPage />,
  },
  {
    path: "films/:filmId",
    element: <FilmPage />,
  },
]);

function Root() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
