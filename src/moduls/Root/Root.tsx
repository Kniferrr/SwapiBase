import "./Root.scss";
import AllFilmsPage from "./AllFilmsPage/AllFilmsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import FilmPage from "./FilmPage/FilmPage";

const router = createBrowserRouter([
  {
    path: "./",
    element: <Header />,
  },
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
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
