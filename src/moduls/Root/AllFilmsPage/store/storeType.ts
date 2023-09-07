interface FilmrInteface {}
export interface PuzzleState {
  films: FilmrInteface;
}

export interface PuzzleStateActions extends PuzzleState {
  setFulms: () => void;
}
