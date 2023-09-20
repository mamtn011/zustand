import { create } from "zustand";

import { produce } from "immer";

const initialStates = {
  banana: 0,
  grapes: 0,
  coconut: 0,
  cucumber: 0,
  broccoli: 0,
  tomato: 0,
};
const useStoreImmer = create((set) => ({
  apple: 0,
  addApple: () => set((state) => ({ apple: state.apple + 1 })),
  removeApple: () => set((state) => ({ apple: state.apple - 1 })),

  watermelon: 0,
  addWatermelon: () => set((state) => ({ watermelon: state.watermelon + 1 })),
  removeWatermelon: () =>
    set((state) => ({ watermelon: state.watermelon - 1 })),

  mango: 0,
  addMango: () => set((state) => ({ mango: state.mango + 1 })),
  removeMango: () => set((state) => ({ mango: state.mango - 1 })),

  banana: 0,
  addBanana: () => set((state) => ({ banana: state.banana + 1 })),
  removeBanana: () => set((state) => ({ banana: state.banana - 1 })),

  grapes: 0,
  addGrapes: () => set((state) => ({ grapes: state.grapes + 1 })),
  removeGrapes: () => set((state) => ({ grapes: state.grapes - 1 })),

  coconut: 0,
  addCoconut: () => set((state) => ({ coconut: state.coconut + 1 })),
  removeCoconut: () => set((state) => ({ coconut: state.coconut - 1 })),

  cucumber: 0,
  addCucumber: () => set((state) => ({ cucumber: state.cucumber + 1 })),
  removeCucumber: () => set((state) => ({ cucumber: state.cucumber - 1 })),

  broccoli: 0,
  addBroccoli: () => set((state) => ({ broccoli: state.broccoli + 1 })),
  removeBroccoli: () => set((state) => ({ broccoli: state.broccoli - 1 })),

  tomato: 0,
  addTomato: () => set((state) => ({ tomato: state.tomato + 1 })),
  removeTomato: () => set((state) => ({ tomato: state.tomato - 1 })),
}));

export default useStoreImmer;
