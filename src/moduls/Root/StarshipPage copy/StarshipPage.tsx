import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./StarshipPage.scss";
import { filmDataInterface } from "../interfaces/AllFilmsPageInterface";
import FilmComponent from "../PageComponents/FilmComponent/FilmComponent";
import { Key } from "react";
import { FetchSwApiById } from "../../../servises/Fetch/FetchSwapiData";
import CharacterComponent from "../PageComponents/CharacterComponent/CharacterComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import StarshipPageCard from "./SpeciesPageCard/StarshipPageCard";

const StarshipPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `starship${id}`,
    () => FetchSwApiById(id, "starships"),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading || !data || !data.films) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }

  const Characters =
    data.pilots && data.pilots.length > 0 ? (
      <>
        <h2>Characters:</h2>
        <div className="characters">
          {data.pilots.map(
            (character: string, index: Key | null | undefined) => (
              <CharacterComponent key={index} character={character} />
            )
          )}
        </div>
      </>
    ) : (
      <div></div>
    );

  return (
    <>
      <div>
        <StarshipPageCard data={data} />
        <h2>Films:</h2>
        <div className="film">
          {data.films.map((film: string, index: Key | null | undefined) => (
            <FilmComponent key={index} film={film} />
          ))}
        </div>
        {Characters}
      </div>
    </>
  );
};

export default StarshipPage;
