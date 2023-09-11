import { useParams } from "react-router-dom";
import { filmDataInterface } from "../../AllFilmsPage/AllFilmsPageInterface";
import "./FilmPageCard.scss";

const FilmPageCard: React.FC<{ data: filmDataInterface }> = ({ data }) => {
  const { filmId } = useParams();
  return (
    <div className="film">
      <img
        src={`https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt="film img"
      ></img>
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
