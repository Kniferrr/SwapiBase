import { FilmCardProps } from "../../AllFilmsPage/AllFilmsPageInterface";
import "./CharactersCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";

const CharacterCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/characters/${id}`}>
      <div className="film-card">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        ></img>
        <h2>{data.name}</h2>
        <p>
          <strong>Height:</strong> {data.height}
        </p>
        <p>
          <strong>Mass:</strong> {data.mass}
        </p>
        <p>
          <strong>Hair color:</strong> {data.hair_color}
        </p>
        <p>
          <strong>Skin color:</strong> {data.skin_color}
        </p>
        <p>
          <strong>Eye color:</strong> {data.eye_color}
        </p>
        <p>
          <strong>Birth year:</strong> {data.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {data.gender}
        </p>
      </div>
    </a>
  );
};

export default CharacterCard;
