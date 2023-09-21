export const watermelonSlice = (set) => ({
  watermelon: 0,
  addWatermelon: () => set((state) => ({ watermelon: state.watermelon + 1 })),
  removeWatermelon: () =>
    set((state) => ({ watermelon: state.watermelon - 1 })),
});
