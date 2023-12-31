import { useParams } from "react-router-dom";
import { filmDataInterface } from "../interfaces/AllFilmsPageInterface";
import "./Paginator.scss";

const Paginator = ({
  data,
  category,
}: {
  data: filmDataInterface;
  category: string;
}) => {
  const totalPages = Math.ceil(data.count / 10);
  let { page } = useParams();
  let prevPage = page ? parseInt(page) - 1 : 1;
  let nextPage = page ? parseInt(page) + 1 : 1;
  if (prevPage < 1) prevPage = 1;
  if (nextPage > totalPages) nextPage = totalPages;
  if (page == undefined) page = "1";
  return (
    <div className="paginator">
      <a href={`#/${category}/page/` + String(prevPage)}>
        <button className="prev-button">Prev</button>
      </a>
      <span className="page-info">
        Page {page} of {totalPages}
      </span>
      <a href={`#/${category}/page/` + String(nextPage)}>
        <button className="next-button">Next</button>
      </a>
    </div>
  );
};

export default Paginator;
