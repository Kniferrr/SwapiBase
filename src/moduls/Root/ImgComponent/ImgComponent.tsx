import { useState } from "react";
import { ImgComponentProps } from "../interfaces/AllFilmsPageInterface";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const ImgComponent: React.FC<ImgComponentProps> = ({ id, resource }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <LoadingComponent />
        </div>
      )}
      <img
        className="planet-img"
        src={`https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt="planet-img"
      />
    </>
  );
};

export default ImgComponent;
