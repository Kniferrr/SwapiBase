import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./CharacterPageCard.scss";
import ImgComponent from "../../ImgComponent/ImgComponent";

const CharacterPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  const idValue: string = id as string;
  return (
    <div className="character">
      <ImgComponent id={idValue} resource={"characters"} />
      <h1>{data.name}</h1>
      <p>height: {data.height}</p>
      <p>mass: {data.mass}</p>
      <p>hair_color: {data.hair_color}</p>
      <p>skin_color: {data.skin_color}</p>
      <p>eye_color: {data.eye_color}</p>
      <p>birth_year: {data.birth_year}</p>
      <p>gender: {data.gender}</p>
    </div>
  );
};
export default CharacterPageCard;
