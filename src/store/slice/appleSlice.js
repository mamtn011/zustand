export const appleSlice = (set) => ({
  apple: 0,
  addApple: () => set((state) => ({ apple: state.apple + 1 })),
  removeApple: () => set((state) => ({ apple: state.apple - 1 })),
});
