import { FilmComponentData } from "../../AllFilmsPageInterface";

const FilmComponent: React.FC<{ data: FilmComponentData }> = ({ data }) => {
  return (
    <div className="film">
      <h1>{data.title}</h1>
      <p>Эпизод: {data.episode_id}</p>
      <p>Режиссер: {data.director}</p>
      <p>Продюсер: {data.producer}</p>
      <p>Дата выпуска: {data.release_date}</p>
      <p>Отрывок: {data.opening_crawl}</p>
    </div>
  );
};
export default FilmComponent;
