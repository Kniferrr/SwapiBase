import { FilmCardProps } from "../AllFilmsPageInterface";
import "./FilmCard.scss";

const FilmCard: React.FC<FilmCardProps> = (props) => {
  const film = props.film;
  const onClickFilmCard = () => {
    console.log(film.episode_id);
  };
  return (
    <div className="film-card" onClick={onClickFilmCard}>
      <h2>{film.title}</h2>
      <p>
        <strong>Director:</strong> {film.director}
      </p>
      <p>
        <strong>Producer:</strong> {film.producer}
      </p>
      <p>
        <strong>Release Date:</strong> {film.release_date}
      </p>
      <p>
        <strong>Episode ID:</strong> {film.episode_id}
      </p>
    </div>
  );
};

export default FilmCard;
