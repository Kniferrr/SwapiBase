import React, { Suspense } from "react";
import "./Root.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import AllPlanetsPage from "../AllPlanetsPage/AllPlanetsPage";
import PlanetPage from "../PlanetPage/PlanetPage";
import AllSpeciesPage from "../AllSpeciesPage/AllSpeciesPage";
import SpeciesPage from "../SpeciesPage/SpeciesPage";
import AllStarshipsPage from "../AllStarshipsPage/AllStarshipsPage";
import StarshipPage from "../StarshipPage/StarshipPage";
import AllVehiclesPage from "../AllVehiclesPage/AllVehiclesPage";
import VehiclesPage from "../VehiclesPage/VehiclesPage";
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
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <MainPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "films/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllFilmsPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "films/:filmId",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <FilmPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "characters/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllCharactersPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "characters/:id",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <CharacterPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/planets/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllPlanetsPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "planets/:id",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <PlanetPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/species/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllSpeciesPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "species/:id",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <SpeciesPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/starships/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllStarshipsPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "starships/:id",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <StarshipPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/vehicles/page/:page?",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <AllVehiclesPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "vehicles/:id",
    element: (
      <>
        <Suspense
          fallback={
            <div>
              <LoadingComponent />
            </div>
          }
        >
          <VehiclesPage />
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
