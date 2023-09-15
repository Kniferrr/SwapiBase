import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./StarshipsCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";

const StarshipsCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/starships/${id}`}>
      <div className="film-card">
        <img
          className="planet-img"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          alt="planet-img"
        ></img>
        <h2>{data.name}</h2>
        <p>
          <strong>Model:</strong> {data.model}
        </p>
        <p>
          <strong>MGLT:</strong> {data.MGLT}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {data.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {data.consumables}
        </p>
        <p>
          <strong>Cost in credits:</strong> {data.cost_in_credits}
        </p>
        <p>
          <strong>Crew:</strong> {data.crew}
        </p>
        <p>
          <strong>Hyperdrive Rating Colors:</strong> {data.hyperdrive_rating}
        </p>
        <p>
          <strong>Length:</strong> {data.length}
        </p>
        <p>
          <strong>Manufacturer:</strong> {data.manufacturer}
        </p>
        <p>
          <strong>Max Atmosphering Speed:</strong> {data.max_atmosphering_speed}
        </p>
        <p>
          <strong>Passengers:</strong> {data.passengers}
        </p>
      </div>
    </a>
  );
};

export default StarshipsCard;
