import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./FilmPage.scss";
import { filmDataInterface } from "../AllFilmsPage/AllFilmsPageInterface";
import { FetchSwApiById } from "../../../Fetch/FetchSwapiData";
import CharacterComponent from "../PageComponents/CharacterComponent/CharacterComponent";
import PlanetComponent from "../PageComponents/PlanetComponent/PlanetComponent";
import StarshipComponent from "../PageComponents/StarshipComponent/StarshipComponent";
import VehicleComponent from "../PageComponents/VehicleComponent/VehicleComponent";
import SpeciesComponent from "../PageComponents/SpeciesComponent/SpeciesComponent";
import FilmPageCard from "./FilmPageCard/FilmPageCard";

const FilmPage: React.FC = () => {
  const { filmId } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    "films",
    () => FetchSwApiById(filmId, "films"),
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

  const filmData: filmDataInterface = data;
  const characterLinks: string[] = data.characters;
  const planetLinks: string[] = data.planets;
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
        <div className="app">
          <FilmPageCard data={filmData} />
          <h2>Characters:</h2>
          <div className="characters">
            {characterLinks.map((character, index) => (
              <CharacterComponent key={index} character={character} />
            ))}
          </div>
          <h2>Planets:</h2>
          <div className="planets">
            {planetLinks.map((planet, index) => (
              <PlanetComponent key={index} planet={planet} />
            ))}
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
      </div>
    </>
  );
};

export default FilmPage;
