import { create } from "zustand";
import { redux } from "zustand/middleware";
const initialStates = {
  count: 0,
};

export const types = {
  increase: "INCREASE",
  decrease: "DECREASE",
  increaseBy: "INCREASE_BY",
  decreaseBy: "DECREASE_BY",
  reset: "RESET",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.increase:
      return { count: state.count + 1 };
    case types.decrease:
      return { count: state.count - 1 };
    case types.increaseBy:
      return { count: state.count + payload };
    case types.decreaseBy:
      return { count: state.count - payload };
    case types.reset:
      return { count: 0 };
    default:
      return initialStates;
  }
};
const useStoreRedux = create(redux(reducer, initialStates));

export default useStoreRedux;
