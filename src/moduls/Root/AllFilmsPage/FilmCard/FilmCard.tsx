import { FilmCardProps } from "../AllFilmsPageInterface";
import "./FilmCard.scss";

const FilmCard: React.FC<FilmCardProps> = ({ data, counter }) => {
  return (
    <div className="character-card">
      <img
        src={`https://starwars-visualguide.com/assets/img/films/${counter}.jpg`}
        alt=""
      ></img>
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
