import { create } from "zustand";
import { produce } from "immer";
import { immer } from "zustand/middleware/immer";
import { appleSlice } from "./slice/appleSlice";
import { watermelonSlice } from "./slice/watermelonSlice";
const useStoreImmer = create((set) => ({
  // ...................apple and watermelon state is in slice.....................
  ...appleSlice(set),
  // apple: 0,
  // addApple: () => set((state) => ({ apple: state.apple + 1 })),
  // removeApple: () => set((state) => ({ apple: state.apple - 1 })),
  ...watermelonSlice(set),
  // watermelon: 0,
  // addWatermelon: () => set((state) => ({ watermelon: state.watermelon + 1 })),
  // removeWatermelon: () => set((state) => ({ watermelon: state.watermelon - 1 })),

  // ..................updating deeply nested object using immer .....................
  count: {
    fruits: {
      mango: 0,
      banana: 0,
    },
    vagetables: {
      broccoli: 0,
      tomato: 0,
    },
  },
  //mango: 0,
  addMango: () =>
    set((state) => ({
      count: {
        ...state.count,
        fruits: { ...state.count.fruits, mango: state.count.fruits.mango + 1 },
      },
    })),
  removeMango: () =>
    set((state) => ({
      count: {
        ...state.count,
        fruits: { ...state.count.fruits, mango: state.count.fruits.mango - 1 },
      },
    })),
  //banana: 0,
  addBanana: () =>
    set((state) => ({
      count: {
        ...state.count,
        fruits: {
          ...state.count.fruits,
          banana: state.count.fruits.banana + 1,
        },
      },
    })),
  removeBanana: () =>
    set((state) => ({
      count: {
        ...state.count,
        fruits: {
          ...state.count.fruits,
          banana: state.count.fruits.banana - 1,
        },
      },
    })),
  // broccoli: 0,
  addBroccoli: () =>
    set(
      produce((state) => {
        state.count.vagetables.broccoli += 1;
      })
    ),
  removeBroccoli: () =>
    set(
      produce((state) => {
        --state.count.vagetables.broccoli;
      })
    ),
  // tomato: 0,
  addTomato: () =>
    set(
      produce((state) => {
        ++state.count.vagetables.tomato;
      })
    ),
  removeTomato: () =>
    set(
      produce((state) => {
        --state.count.vagetables.tomato;
      })
    ),

  grapes: 0,
  addGrapes: () => set((state) => ({ grapes: state.grapes + 1 })),
  removeGrapes: () => set((state) => ({ grapes: state.grapes - 1 })),

  coconut: 0,
  addCoconut: () => set((state) => ({ coconut: state.coconut + 1 })),
  removeCoconut: () => set((state) => ({ coconut: state.coconut - 1 })),

  cucumber: 0,
  addCucumber: () => set((state) => ({ cucumber: state.cucumber + 1 })),
  removeCucumber: () => set((state) => ({ cucumber: state.cucumber - 1 })),
}));

export default useStoreImmer;
