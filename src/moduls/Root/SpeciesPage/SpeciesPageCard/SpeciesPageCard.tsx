import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./SpeciesPageCard.scss";
import ImgComponent from "../../ImgComponent/ImgComponent";

const SpeciesPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  const idValue: string = id as string;
  return (
    <div className="character">
      <ImgComponent id={idValue} resource={"species"} />
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
