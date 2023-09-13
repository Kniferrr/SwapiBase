import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./SpeciesPageCard.scss";

const SpeciesPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  return (
    <div className="character">
      <img
        src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt="character img"
      ></img>
      <h1>{data.name}</h1>
      <p>Average Height: {data.average_height}</p>
      <p>Average Lifespan Period: {data.average_lifespan}</p>
      <p>Classification: {data.classification}</p>
      <p>Designation: {data.designation}</p>
      <p>Eye Colors: {data.eye_colors}</p>
      <p>Hair Colors: {data.hair_colors}</p>
      <p>Language: {data.language}</p>
    </div>
  );
};
export default SpeciesPageCard;
