import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import "./FilmPageCard.scss";
import ImgComponent from "../../ImgComponent/ImgComponent";

const FilmPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { id } = useParams();
  const idValue: string = id as string;
  return (
    <div className="film">
      <ImgComponent id={idValue} resource={"films"} />
      <h1>{data.title}</h1>
      <p>Episode: {data.episode_id}</p>
      <p>Director: {data.director}</p>
      <p>Producer: {data.producer}</p>
      <p>Release Date: {data.release_date}</p>
      <p>Opening Crawl: {data.opening_crawl}</p>
    </div>
  );
};
export default FilmPageCard;
