import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./CharactersCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import ImgComponent from "../../ImgComponent/ImgComponent";

const CharacterCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/characters/${id}`}>
      <div className="film-card">
        <ImgComponent id={id} resource={"characters"} />
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
