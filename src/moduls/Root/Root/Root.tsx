import React, { Suspense } from "react";
import "./Root.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
const FilmPage = React.lazy(() => import("../FilmPage/FilmPage"));
const AllFilmsPage = React.lazy(() => import("../AllFilmsPage/AllFilmsPage"));
const AllCharactersPage = React.lazy(
  () => import("../AllCharactersPage/AllCharactersPage")
);
const CharacterPage = React.lazy(
  () => import("../CharacterPage/CharacterPage")
);

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "films/",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <AllFilmsPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "films/:filmId",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <FilmPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "characters/page/:page?",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <AllCharactersPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "characters/:id",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <CharacterPage />
        </Suspense>
      </>
    ),
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
