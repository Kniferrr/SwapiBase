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

export interface FilmComponentData {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface CharacterComponentData {
  name: string;
}

export interface PlanetComponentData {
  name: string;
}

export interface StarshipComponentData {
  name: string;
}

export interface VehicleComponentData {
  name: string;
}

export interface SpeciesComponentData {
  name: string;
}

export interface ImgComponentProps {
  id: string | number;
  resource: string;
}
