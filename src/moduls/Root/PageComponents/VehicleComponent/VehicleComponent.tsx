import { useQuery } from "react-query";
import "./VehicleComponent.scss";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { FetchSwApiById } from "../../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";

const VehicleComponent: React.FC<{ vehicle: string }> = ({ vehicle }) => {
  const id = parseIdFromUrl(vehicle);

  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `vehicles${vehicle}`,
    () => FetchSwApiById(id, "vehicles"),
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
    <a href={`#/vehicles/${id}`}>
      <div className="vehicle">
        <div className="vehicle-info">
          <img
            className="vehicle-img"
            src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            alt="vehicle-img"
          ></img>
          <h2>{data.name}</h2>
          <div className="property">
            <span className="label">Model:</span>
            <span className="value">{data.model}</span>
          </div>
          <div className="property">
            <span className="label">Manufacturer:</span>
            <span className="value">{data.manufacturer}</span>
          </div>
          <div className="property">
            <span className="label">Cost in Credits:</span>
            <span className="value">{data.cost_in_credits}</span>
          </div>
          <div className="property">
            <span className="label">Length:</span>
            <span className="value">{length} m</span>
          </div>
          <div className="property">
            <span className="label">Max Atmosphering Speed:</span>
            <span className="value">{data.max_atmosphering_speed} km/h</span>
          </div>
          <div className="property">
            <span className="label">Crew:</span>
            <span className="value">{data.crew}</span>
          </div>
          <div className="property">
            <span className="label">Passengers:</span>
            <span className="value">{data.passengers}</span>
          </div>
          <div className="property">
            <span className="label">Cargo Capacity:</span>
            <span className="value">{data.cargo_capacity} kg</span>
          </div>
          <div className="property">
            <span className="label">Consumables:</span>
            <span className="value">{data.consumables}</span>
          </div>
          <div className="property">
            <span className="label">Vehicle Class:</span>
            <span className="value">{data.vehicle_class}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
export default VehicleComponent;
