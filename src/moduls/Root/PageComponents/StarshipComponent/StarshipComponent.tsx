import { useQuery } from "react-query";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./StarshipComponent.scss";
import { FetchSwApiById } from "../../../../servises/Fetch/FetchSwapiData";

const StarshipComponent: React.FC<{ starship: string }> = ({ starship }) => {
  const id = parseIdFromUrl(starship);

  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `starships${starship}`,
    () => FetchSwApiById(id, "starships"),
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
    <a href={`#/starships/${id}`}>
      <div className="starship">
        <div className="starship-info">
          <img
            className="starship-img"
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            alt="starship-img"
          />
          <h2>Starship Information</h2>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Model:</strong> {data.model}
          </p>
          <p>
            <strong>Manufacturer:</strong> {data.manufacturer}
          </p>
          <p>
            <strong>Cost in Credits:</strong> {data.cost_in_credits}
          </p>
          <p>
            <strong>Length:</strong> {length} m
          </p>
          <p>
            <strong>Max Atmosphering Speed:</strong>{" "}
            {data.max_atmosphering_speed} km/h
          </p>
          <p>
            <strong>Crew:</strong> {data.crew}
          </p>
          <p>
            <strong>Passengers:</strong> {data.passengers}
          </p>
          <p>
            <strong>Cargo Capacity:</strong> {data.cargo_capacity} kg
          </p>
          <p>
            <strong>Consumables:</strong> 1 year
          </p>
          <p>
            <strong>Hyperdrive Rating:</strong> Rating {data.hyperdrive_rating}
          </p>
          <p>
            <strong>MGLT:</strong> {data.MGLT}
          </p>
          <p>
            <strong>Starship Class:</strong> {data.starship_class}
          </p>
        </div>
      </div>
    </a>
  );
};
export default StarshipComponent;
