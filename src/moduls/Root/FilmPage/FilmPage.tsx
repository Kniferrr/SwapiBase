import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FilmComponent from "./FilmPageComponents/FilmComponent";
import CharacterComponent from "./FilmPageComponents/CharacterComponent";
import PlanetComponent from "./FilmPageComponents/PlanetComponent";
import StarshipComponent from "./FilmPageComponents/StarshipComponent";
import VehicleComponent from "./FilmPageComponents/VehicleComponent";
import SpeciesComponent from "./FilmPageComponents/SpeciesComponent";
import "./FilmPage.scss";
import { filmDataInterface } from "../AllFilmsPage/AllFilmsPageInterface";
import { FetchSwApiFilmById } from "../../../Fetch/FetchSwapiData";

const FilmPage: React.FC = () => {
  const { filmId } = useParams();
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    "film",
    () => FetchSwApiFilmById(filmId),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }

  const filmData: any = data; // Замените на фактические данные фильма из JSON-объекта
  const characterLinks: string[] = data.characters; // Замените на фактические данные о персонажах из JSON-объекта
  const planetLinks: string[] = data.planets; // Замените на фактические данные о планетах из JSON-объекта
  const starshipLinks: string[] = data.starships; // Замените на фактические данные о звездолетах из JSON-объекта
  const vehicleLinks: string[] = data.vehicles; // Замените на фактические данные о транспортных средствах из JSON-объекта
  const speciesLinks: string[] = data.species; // Замените на фактические данные о видах из JSON-объекта

  return (
    <>
      <div>
        <div className="app">
          <FilmComponent data={filmData} />
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
          <h2>Vehicles:</h2>
          <div className="vehicles">
            {vehicleLinks.map((vehicle, index) => (
              <VehicleComponent key={index} vehicle={vehicle} />
            ))}
          </div>
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
