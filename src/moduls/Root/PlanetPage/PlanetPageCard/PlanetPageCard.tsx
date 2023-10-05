import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./PlanetPageCard.scss";
import ImgComponent from "../../ImgComponent/ImgComponent";

const PlanetPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  const idValue: string = id as string;
  return (
    <div className="character">
      <ImgComponent id={idValue} resource={"planets"} />
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
