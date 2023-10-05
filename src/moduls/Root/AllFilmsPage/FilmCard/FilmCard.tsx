import ImgComponent from "../../ImgComponent/ImgComponent";
import { FilmCardProps } from "../../interfaces/AllFilmsPageInterface";
import "./FilmCard.scss";

const FilmCard: React.FC<FilmCardProps> = ({ data, counter }) => {
  const counterValue: number = counter as number;
  return (
    <div className="character-card">
      <ImgComponent id={counterValue} resource={"films"} />
      <h2>{data.title}</h2>
      <p>
        <strong>Director:</strong> {data.director}
      </p>
      <p>
        <strong>Producer:</strong> {data.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {data.release_date}
      </p>
      <p>
        <strong>Episode ID:</strong> {data.episode_id}
      </p>
    </div>
  );
};

export default FilmCard;
