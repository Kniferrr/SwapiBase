export interface filmInterface {
  [x: string]: any;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface filmDataInterface {
  [x: string]: any;
  result: filmInterface[];
}

export interface FilmCardProps {
  data: filmInterface;
  counter?: number;
}

// Тип данных для фильма
export interface FilmComponentData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

// Тип данных для персонажа
export interface CharacterComponentData {
  name: string;
}

// Тип данных для планеты
export interface PlanetComponentData {
  name: string;
}

// Тип данных для звездолета
export interface StarshipComponentData {
  name: string;
}

// Тип данных для транспортного средства
export interface VehicleComponentData {
  name: string;
}

// Тип данных для вида
export interface SpeciesComponentData {
  name: string;
}
