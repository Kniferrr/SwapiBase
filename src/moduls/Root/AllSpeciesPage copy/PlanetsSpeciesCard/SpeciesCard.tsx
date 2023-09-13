import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./SpeciesCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";

const SpeciesCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/species/${id}`}>
      <div className="film-card">
        <img
          className="planet-img"
          src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          alt="planet-img"
        ></img>
        <h2>{data.name}</h2>
        <p>
          <strong>Classification:</strong> {data.classification}
        </p>
        <p>
          <strong>Designation:</strong> {data.designation}
        </p>
        <p>
          <strong>Average Height:</strong> {data.average_height}
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
          <strong>Average Lifespan Water:</strong> {data.average_lifespan}
        </p>
        <p>
          <strong>language:</strong> {data.language}
        </p>
      </div>
    </a>
  );
};

export default SpeciesCard;
