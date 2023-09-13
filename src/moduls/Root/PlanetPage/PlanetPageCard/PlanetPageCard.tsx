import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./PlanetPageCard.scss";

const PlanetPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  return (
    <div className="character">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt="character img"
      ></img>
      <h1>{data.name}</h1>
      <p>Rotation Period: {data.rotation_period}</p>
      <p>Orbital Period: {data.orbital_period}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Climate: {data.climate}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Surface Water: {data.surface_water}</p>
      <p>Population: {data.population}</p>
    </div>
  );
};
export default PlanetPageCard;
