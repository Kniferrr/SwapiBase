import { FilmComponentData } from "../../AllFilmsPage/AllFilmsPageInterface";

const FilmComponent: React.FC<{ data: FilmComponentData }> = ({ data }) => {
  return (
    <div className="film">
      <img
        src={`https://starwars-visualguide.com/assets/img/films/${data.episode_id}.jpg`}
        alt=""
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
export default FilmComponent;
