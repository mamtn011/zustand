import useStore from "./store.count";

export const increaseCount = () =>
  useStore.setState((state) => ({ count: state.count + 1 }));

export const decreaseCount = () =>
  useStore.setState((state) => ({ count: state.count - 1 }));

export const increaseBy = (num) =>
  useStore.setState((state) => ({ count: state.count + num }));

export const decreaseBy = (num) =>
  useStore.setState((state) => ({ count: state.count - num }));

export const resetCount = () => useStore.setState(() => ({ count: 0 }));
