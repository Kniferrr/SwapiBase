import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./StarshipPageCard.scss";

const StarshipPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  return (
    <div className="character">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt="character img"
      ></img>
      <h1>{data.name}</h1>
      <p>Model: {data.model}</p>
      <p>MGLT: {data.MGLT}</p>
      <p>Cargo Capacity: {data.cargo_capacity}</p>
      <p>Consumables: {data.consumables}</p>
      <p>Cost in Credits: {data.cost_in_credits}</p>
      <p>Crew: {data.crew}</p>
      <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
      <p>Length: {data.length}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Max atmosphering speed: {data.max_atmosphering_speed}</p>
      <p>Passengers: {data.passengers}</p>
    </div>
  );
};
export default StarshipPageCard;
