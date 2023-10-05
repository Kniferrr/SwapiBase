import "./FilmComponent.scss";
import { filmDataInterface } from "../../interfaces/AllFilmsPageInterface";
import { parseIdFromUrl } from "../../../../servises/ParseIdServis";
import { useQuery } from "react-query";
import { FetchSwApiById } from "../../../../servises/Fetch/FetchSwapiData";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import ImgComponent from "../../ImgComponent/ImgComponent";

const FilmComponent: React.FC<{ film: string }> = ({ film }) => {
  const id = parseIdFromUrl(film);
  const { data, isLoading, isError, error } = useQuery<filmDataInterface>(
    `films${id}`,
    () => FetchSwApiById(id, "films"),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading || !data) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <div>Error: {(error as Error)?.message || "An error occurred"}</div>;
  }
  return (
    <a href={`#/films/${id}`}>
      <div className="film-info">
        <ImgComponent id={id} resource={"films"} />
        <h2 className="character-name">{data.title}</h2>
        <p>
          <strong>Episode:</strong> {data.episode_id}
        </p>
        <p>
          <strong>Director:</strong> {data.director}
        </p>
        <p>
          <strong>Producer:</strong> {data.producer}
        </p>
        <p>
          <strong>Release Date:</strong> {data.release_date}
        </p>
      </div>
    </a>
  );
};
export default FilmComponent;
