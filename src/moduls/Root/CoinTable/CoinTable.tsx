import React from "react";
import "./CoinTable.css";
import { FetchSwApiFilm } from "../../../Fetch/FetchCoinData";
import { useQuery } from "react-query";
import FilmCard from "./FilmCard/FilmCard";
import { filmDataInterface, filmInterface } from "./FilmInterface";

const CoinTable: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    "films",
    FetchSwApiFilm
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }
  return (
    <>
      <div>
        {data.results.map((film: filmInterface) => {
          return <FilmCard film={film} key={film.episode_id} />;
        })}
      </div>
    </>
  );
};

export default CoinTable;
