import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { PuzzleState, PuzzleStateActions } from "./storeType";

const initialState: PuzzleState = {
  films: [],
};

const usePuzzleStore = create<PuzzleStateActions>()(
  immer((set) => ({
    ...initialState,
    setFulms: () => set((state: PuzzleState) => {}),
  }))
);

export default usePuzzleStore;
