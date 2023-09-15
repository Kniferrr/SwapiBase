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
import StarshipsCard from "./StarshipsCard/StarshipsCard";

const AllStarshipsPage: React.FC = () => {
  let { page } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `starships${page}`,
    () => FetchSwApiPageInfo("starships", page),
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
        return <StarshipsCard data={planet} key={planet.name} />;
      })}
      <Paginator data={data} category={"starships"} />
    </div>
  );
  return <>{CreaterFilmsCards}</>;
};

export default AllStarshipsPage;
