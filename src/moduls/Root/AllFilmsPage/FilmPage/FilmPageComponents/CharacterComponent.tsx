import { useQuery } from "react-query";
import { filmDataInterface } from "../../AllFilmsPageInterface";
import { FetchSwApiPeople } from "../../../../../Fetch/FetchSwapiData";
import "./CharacterComponent.scss";

const CharacterComponent: React.FC<{ character: string }> = ({ character }) => {
  const regex = /\/(\d+)\/$/;
  const match = regex.exec(character);
  let id = 0;
  if (match) {
    id = parseInt(match[1]);
  }
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `people${character}`,
    () => FetchSwApiPeople(character),
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
    <div className="character">
      <div className="character-info">
        <img
          className="character-img"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        ></img>
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
    </div>
  );
};
export default CharacterComponent;
