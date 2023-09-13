import React from "react";
import { useQuery } from "react-query";
import {
  filmDataInterface,
  filmInterface,
} from "../interfaces/AllFilmsPageInterface";
import { useParams } from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import { FetchSwApiPageInfo } from "../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import PlanetsCard from "./PlanetsPageCard/PlanetsCard";

const AllPlanetsPage: React.FC = () => {
  let { page } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `planets${page}`,
    () => FetchSwApiPageInfo("planets", page),
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
      {data.results.map((planet: filmInterface) => {
        return <PlanetsCard data={planet} key={planet.name} />;
      })}
      <Paginator data={data} category={"planets"} />
    </div>
  );
  return <>{CreaterFilmsCards}</>;
};

export default AllPlanetsPage;
