import { useQuery } from "react-query";
import "./PlanetComponent.scss";
import { FetchSwApiById } from "../../../../Fetch/FetchSwapiData";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { filmDataInterface } from "../../AllFilmsPage/AllFilmsPageInterface";

const PlanetComponent: React.FC<{ planet: string }> = ({ planet }) => {
  const id = parseIdFromUrl(planet);

  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `planets${planet}`,
    () => FetchSwApiById(id, "planets"),
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

  return (
    <a href={`#/planets/${id}`}>
      <div className="planet">
        <div className="planet-info">
          <img
            className="planet-img"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            alt="planet-img"
          ></img>
          <h2>Planet Information</h2>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Rotation Period:</strong> {data.rotation_period}
          </p>
          <p>
            <strong>Orbital Period:</strong> {data.orbital_period}
          </p>
          <p>
            <strong>Diameter:</strong> {data.diameter}
          </p>
          <p>
            <strong>Climate:</strong> {data.climate}
          </p>
          <p>
            <strong>Gravity:</strong> {data.gravity}
          </p>
          <p>
            <strong>Terrain:</strong> {data.terrain}
          </p>
          <p>
            <strong>Surface Water:</strong> {data.surface_water}
          </p>
          <p>
            <strong>Population:</strong> {data.population}
          </p>
        </div>
      </div>
    </a>
  );
};
export default PlanetComponent;
