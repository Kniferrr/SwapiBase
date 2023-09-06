import axios from "axios";
import { filmDataInterface } from "../moduls/Root/CoinTable/FilmInterface";

const SwApiUrl = "https://swapi.py4e.com/api";

export const FetchSwApiFilm = async (): Promise<filmDataInterface> => {
  try {
    // Ваша логика запроса данных с использованием Axios
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
