import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./VehiclesPageCard.scss";
import ImgComponent from "../../ImgComponent/ImgComponent";

const VehiclesPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  const idValue: string = id as string;
  return (
    <div className="character">
      <ImgComponent id={idValue} resource={"vehicles"} />
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
export default VehiclesPageCard;
