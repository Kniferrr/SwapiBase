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

export const FetchSwApiFilmById = async (
  id: string | undefined
): Promise<filmDataInterface> => {
  try {
    const response = await axios.get(`${SwApiUrl}/films/${id}`);

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

export const FetchSwApiPeopleById = async (
  id: string | undefined | number
): Promise<filmDataInterface> => {
  try {
    const response = await axios.get(`${SwApiUrl}/people/${id}`);
    console.log(response);

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
