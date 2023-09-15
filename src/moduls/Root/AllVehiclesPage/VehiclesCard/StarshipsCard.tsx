import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./VehiclesCard.scss";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";

const VehiclesCard: React.FC<FilmCardProps> = ({ data }) => {
  const id = parseIdFromUrl(data.url);
  return (
    <a href={`#/vehicles/${id}`}>
      <div className="film-card">
        <img
          className="planet-img"
          src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
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
          <strong>manufacturer:</strong> {data.manufacturer}
        </p>
        <p>
          <strong>Cost in Credits Capacity:</strong> {data.cost_in_credits}
        </p>
        <p>
          <strong>length:</strong> {data.length}
        </p>
        <p>
          <strong>Max Atmosphering Speed:</strong> {data.max_atmosphering_speed}
        </p>
        <p>
          <strong>Crew:</strong> {data.crew}
        </p>
        <p>
          <strong>Passengers:</strong> {data.passengers}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {data.cargo_capacity}
        </p>
        <p>
          <strong>Consumables:</strong> {data.consumables}
        </p>
        <p>
          <strong>Vehicle Class:</strong> {data.vehicle_class}
        </p>
      </div>
    </a>
  );
};

export default VehiclesCard;
