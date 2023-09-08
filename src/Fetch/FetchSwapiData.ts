import axios from "axios";
import { filmDataInterface } from "../moduls/Root/AllFilmsPage/AllFilmsPageInterface";

const SwApiUrl = "https://swapi.py4e.com/api";

export const FetchSwApiFilm = async (): Promise<filmDataInterface> => {
  try {
    const response = await axios.get(`${SwApiUrl}/films`);

    if (!response.data) {
      throw new Error("Пустой ответ от сервера");
    }

    const data: filmDataInterface = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const FetchSwApiById = async (
  id: string | undefined | number,
  entity: string
): Promise<filmDataInterface> => {
  try {
    const response = await axios.get(`${SwApiUrl}/${entity}/${id}`);

    if (!response.data) {
      throw new Error("Пустой ответ от сервера");
    }

    const data: filmDataInterface = response.data;
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
