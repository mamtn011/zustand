import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  increaseBy: (num) => set((state) => ({ count: state.count + num })),
  decreaseBy: (num) => set((state) => ({ count: state.count - num })),
  resetCount: () => set(() => ({ count: 0 })),
}));

export default useStore;
