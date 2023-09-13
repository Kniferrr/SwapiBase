import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./PlanetsCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";

const PlanetsCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/planets/${id}`}>
      <div className="film-card">
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
        <h2>{data.name}</h2>
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
    </a>
  );
};

export default PlanetsCard;
