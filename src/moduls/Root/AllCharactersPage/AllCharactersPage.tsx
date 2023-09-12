import React from "react";
import { useQuery } from "react-query";
import {
  filmDataInterface,
  filmInterface,
} from "../interfaces/AllFilmsPageInterface";
import CharacterCard from "./CharactersCard/CharactersCard";
import { useParams } from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import { FetchSwApiPageInfo } from "../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const AllCharactersPage: React.FC = () => {
  let { page } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `people${page}`,
    () => FetchSwApiPageInfo("people", page),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data || !data.results) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }

  const CreaterFilmsCards = (
    <div>
      {data.results.map((character: filmInterface) => {
        return <CharacterCard data={character} key={character.name} />;
      })}
      <Paginator data={data} result={[]} />
    </div>
  );
  return <>{CreaterFilmsCards}</>;
};

export default AllCharactersPage;
