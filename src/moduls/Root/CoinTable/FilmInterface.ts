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
  film: filmInterface;
}
