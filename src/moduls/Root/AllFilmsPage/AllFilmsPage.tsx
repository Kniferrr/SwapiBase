import React from "react";
import "./AllFilmsPage.scss";
import { FetchSwApiPageInfo } from "../../../Fetch/FetchSwapiData";
import { useQuery } from "react-query";
import FilmCard from "./FilmCard/FilmCard";
import { filmDataInterface, filmInterface } from "./AllFilmsPageInterface";

const AllFilmsPage: React.FC = () => {
  let routCounter = 1; // кривые id в api
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    "films",
    () => FetchSwApiPageInfo("films", "1"),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data || !data.results) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }

  const CreaterFilmsCards = (
    <div>
      {data.results.map((film: filmInterface) => {
        return (
          <a href={`#/films/${routCounter}`} key={film.episode_id}>
            <FilmCard data={film} counter={routCounter++} />
          </a>
        );
      })}
    </div>
  );
  return <>{CreaterFilmsCards}</>;
};

export default AllFilmsPage;
