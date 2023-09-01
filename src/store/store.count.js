import { create } from "zustand";

const initialStates = {
  count: 0,
};
const useStore = create((set) => ({
  ...initialStates,
  // count: 0,
  // increaseCount: () => set((state) => ({ count: state.count + 1 })),
  // decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  // increaseBy: (num) => set((state) => ({ count: state.count + num })),
  // decreaseBy: (num) => set((state) => ({ count: state.count - num })),
  // resetCount: () => set(() => ({ count: 0 })),
}));

// best practise is keeping states and methods outside the create() function.

// export const increaseCount = () =>
//   useStore.setState((state) => ({ count: state.count + 1 }));

// export const decreaseCount = () =>
//   useStore.setState((state) => ({ count: state.count - 1 }));

// export const increaseBy = (num) =>
//   useStore.setState((state) => ({ count: state.count + num }));

// export const decreaseBy = (num) =>
//   useStore.setState((state) => ({ count: state.count - num }));

// export const resetCount = () => useStore.setState(() => ({ count: 0 }));
// we can write them in a file

export default useStore;
