import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./CharacterPage.scss";
import { filmDataInterface } from "../AllFilmsPage/AllFilmsPageInterface";
import VehicleComponent from "../PageComponents/VehicleComponent/VehicleComponent";
import PlanetComponent from "../PageComponents/PlanetComponent/PlanetComponent";
import StarshipComponent from "../PageComponents/StarshipComponent/StarshipComponent";
import { FetchSwApiById } from "../../../Fetch/FetchSwapiData";
import SpeciesComponent from "../PageComponents/SpeciesComponent/SpeciesComponent";
import FilmComponent from "../PageComponents/FilmComponent/FilmComponent";
import { Key } from "react";
import CharacterPageCard from "./CharacterPageCard/CharacterPageCard";

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `people${id}`,
    () => FetchSwApiById(id, "people"),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading || !data || !data.species) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }

  const films: filmDataInterface = data.films;
  const planet: string = data.homeworld;
  const starshipLinks: string[] = data.starships;
  const vehicleLinks: string[] = data.vehicles;
  const speciesLinks: string[] = data.species;

  const Vehicles =
    vehicleLinks && vehicleLinks.length > 0 ? (
      <>
        <h2>Vehicles:</h2>
        <div className="vehicles">
          {vehicleLinks.map((vehicle, index) => (
            <VehicleComponent key={index} vehicle={vehicle} />
          ))}
        </div>
      </>
    ) : (
      <div></div>
    );

  return (
    <>
      <div>
        <CharacterPageCard data={data} />
        <h2>Films:</h2>
        <div className="film">
          {films.map((film: string, index: Key | null | undefined) => (
            <FilmComponent key={index} film={film} />
          ))}
        </div>
        <h2>Planet:</h2>
        <div className="planets">
          <PlanetComponent key={planet} planet={planet} />
        </div>
        <h2>Starships:</h2>
        <div className="starships">
          {starshipLinks.map((starship, index) => (
            <StarshipComponent key={index} starship={starship} />
          ))}
        </div>
        {Vehicles}
        <h2>Species:</h2>
        <div className="species">
          {speciesLinks.map((species, index) => (
            <SpeciesComponent key={index} species={species} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
