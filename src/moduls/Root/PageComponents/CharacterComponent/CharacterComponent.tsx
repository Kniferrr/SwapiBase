import { useQuery } from "react-query";
import "./CharacterComponent.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import { FetchSwApiById } from "../../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import ImgComponent from "../../ImgComponent/ImgComponent";

const CharacterComponent: React.FC<{ character: string }> = ({ character }) => {
  const id = parseIdFromUrl(character);
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `people${character}`,
    () => FetchSwApiById(id, "people"),
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
    <a href={`#/characters/${id}`}>
      <div className="character-info">
        <ImgComponent id={id} resource={"characters"} />
        <h2 className="character-name">{data.name}</h2>
        <p>
          <strong>Height:</strong> {data.height} cm
        </p>
        <p>
          <strong>Mass:</strong> {data.mass} kg
        </p>
        <p>
          <strong>Hair Color:</strong> {data.hair_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {data.skin_color}
        </p>
        <p>
          <strong>Eye Color:</strong> {data.eye_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {data.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {data.gender}
        </p>
      </div>
    </a>
  );
};
export default CharacterComponent;
