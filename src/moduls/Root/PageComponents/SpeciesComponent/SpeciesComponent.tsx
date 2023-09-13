import { useQuery } from "react-query";
import "./SpeciesComponent.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import { FetchSwApiById } from "../../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";

const SpeciesComponent: React.FC<{ species: string }> = ({ species }) => {
  const id = parseIdFromUrl(species);

  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `species${species}`,
    () => FetchSwApiById(id, "species"),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }
  return (
    <a href={`#/species/${id}`}>
      <div className="species-info">
        <img
          className="planet-img"
          src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          alt="planet-img"
        />
        <h2>{data.name}</h2>
        <p>
          <strong>Classification:</strong> {data.classification}
        </p>
        <p>
          <strong>Designation:</strong> {data.designation}
        </p>
        <p>
          <strong>Average Height:</strong> {data.average_height} cm
        </p>
        <p>
          <strong>Skin Colors:</strong> {data.skin_colors}
        </p>
        <p>
          <strong>Hair Colors:</strong> {data.hair_colors}
        </p>
        <p>
          <strong>Eye Colors:</strong> {data.eye_colors}
        </p>
        <p>
          <strong>Average Lifespan:</strong> {data.average_lifespan} years
        </p>
        <p>
          <strong>Language:</strong> {data.language}
        </p>
      </div>
    </a>
  );
};
export default SpeciesComponent;
