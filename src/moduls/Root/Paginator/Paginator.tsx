import { useParams } from "react-router-dom";
import { filmDataInterface } from "../AllFilmsPage/AllFilmsPageInterface";
import "./Paginator.scss";

const Paginator: React.FC<filmDataInterface> = ({ data }) => {
  const totalPages = Math.ceil(data.count / 10);
  let { page } = useParams();
  let prevPage = page ? parseInt(page) - 1 : 1;
  let nextPage = page ? parseInt(page) + 1 : 1;
  if (prevPage < 1) prevPage = 1;
  if (nextPage > totalPages) nextPage = totalPages;
  return (
    <div className="paginator">
      <a href={"#/characters/page/" + String(prevPage)}>
        <button className="prev-button">Prev</button>
      </a>
      <span className="page-info">
        Страница {page} из {totalPages}
      </span>
      <a href={"#/characters/page/" + String(nextPage)}>
        <button className="next-button">Next</button>
      </a>
    </div>
  );
};

export default Paginator;
