## 1. What is Zustand?

Zustand is a state management library for JavaScript applications, particularly in the context of React applications. Zustand is similar to other state management libraries like Redux and Mobx, but it aims to offer a more lightweight and less boilerplate-heavy approach.

## 2. Key features of Zustand include.

**1. Minimal Boilerplate:** Zustand encourages a simpler setup and less code compared to some other state management solutions.

**2. Immutability:** Like many state management solutions, Zustand also promotes immutability, ensuring that state changes are handled in a way that avoids direct mutations.

**3. Hooks-Based:** Zustand leverages the power of React Hooks, making it easy to integrate with functional components.

**4. Optimized Re-Renders:** Zustand is designed to optimize re-renders by using a mechanism that only updates components subscribed to the specific state changes they care about.

**5. DevTools Integration:** Similar to tools like Redux DevTools, Zustand also offers a browser extension for debugging and inspecting state changes.

**6. Middleware and Effects:** Zustand allows you to add middleware for handling asynchronous actions and side effects.

## 3. Installation

```js
$ npm install zustand
OR
$ yarn add zustand
```

## 4. Basic Guides

**1. Creating a context:**

- First of all we should create a folder in **src** to put our context files, and then, we have to take a javascript file for storing our context.

- Now we have to import create from zustand

```js
import { create } from "zustand";
```

Here create is a function who passes a callback function and returns a hook.

```js
// useStore is a hook returned by create function.
const useStore = create(() => ({}));
// The callback function can return an object.
```

**2. Sending states/methods to components:**

- To send states or methods to components we have to declare them into the object which is returned by callback function, and then, we can send them by exporting useStore hook.

```js
const useStore = create(() => ({
  count: 0,
  increaseCount: () => console.log("Hello"),
}));
export default useStore;
```

**3. Receiving states/methods from components:**

- At first we have to import useStore hook, and then, ussing this hook we can receive states or methods. useStore hook returns the object which is returned from callback function.

```js
import useStore from "../store/store.count";

const count = useStore((state) => state.count);
// OR
const { count, increaseCount } = useStore();
```

**4. Changing state value:**

- We can change state value using methods in callback function. The callback function can receive a function which to be returend by method, and this function pass another callback function and it can receive state. This callback function return an object with property we want to change. ( **little complicated** - keep eyes on the code and read explanation )

```js
// BLOCK - 1
const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));
```

Here callback function of create() reaceived a function named **set** which is returned by different methods. The set function passes a callback function which can receive our states and return an object. In this object we change our state value.

```js
// BLOCK - 2
const useStore = create((set) => ({
  count: 0,
  increaseBy: (num) => set((state) => ({ count: state.count + num })),
  resetCount: () => set(() => ({ count: 0 })),
}));
```

The methods can receive params and we can use them for changing state value. Look at increaseBy method. It received a param num and num has been used to change the value of count state. Now look at resetCount method. We can fix the value of our state like this.

**5. Getting state inside method:**

- Like **set** we cllback function can receive **get** and using it we can get state inside methods.

```js
const useStore = create((set, get) => ({
  count: 0,
  increaseBy: (num) => {
    const count = get().count; // here we get state value
    set((state) => ({ count: state.count + num }));
  },
}));
```

**6. Best Practice:**

- Keeping states and medthods outside the create() function is best practice.

```js
const initialStates = {
  count: 0,
};
const useStore = create((set) => ({
  ...initialStates,
  // count: 0,
  // increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

export const increaseCount = () =>
  useStore.setState((state) => ({ count: state.count + 1 }));
```

Here, we took a variable and initialize an object with state. Then we destructure it inside create() function. Also we keeped increaseCount method ouside the create(). Look carefully, here we export it, because we didn't get it in useStore() hook. Now we have to import it in component to use it. Also we didn't get set function here. That's why, instead of set function we have to use useStore.setState().

We can keep methods in a extra file like .. action.js

```js
// action.js file
import useStore from "./store.count";
// we need to import useStore to use it
export const increaseCount = () =>
  useStore.setState((state) => ({ count: state.count + 1 }));

export const decreaseCount = () =>
  useStore.setState((state) => ({ count: state.count - 1 }));

export const increaseBy = (num) =>
  useStore.setState((state) => ({ count: state.count + num }));

export const decreaseBy = (num) =>
  useStore.setState((state) => ({ count: state.count - num }));

export const resetCount = () => useStore.setState(() => ({ count: 0 }));
```

**NB: A method outside the object is an action, so we should call it action.**

## 5. Advanced Guides

**1. Asynchronous actions:**

- We can define asynchronous actions like this.. Or we can write them in an extra file.

```js
import axios from "axios";
import { create } from "zustand";

const initialStates = {
  users: [],
};
const useUsers = create((set, get) => ({
  ...initialStates,
  getUsers: async () => {
    const { data } = await axios.get(`http://localhost:4000/users`);
    set(() => ({ users: data }));
  },
  addUser: async (dataToAdd) => {
    const { data } = await axios.post(`http://localhost:4000/users`, dataToAdd);
    const users = get().users;
    users.push(data);
    set(() => ({ users }));
  },

  deleteUser: async (id) => {
    await axios.delete(`http://localhost:4000/users/${id}`);
    const users = get().users.filter((user) => user.id != id);
    set(() => ({ users }));
  },
}));

export default useUsers;
```

**2. Redux in Zustand:**

- We can write your code like redux using zustand. To do this we have to import create from zustand and redux from zustand/middleware.

```js
import { create } from "zustand";
import { redux } from "zustand/middleware";
```

- Here redux is a function. create function will pass redux and redux will pass two things (reducer and initial states)

```js
const useStoreRedux = create(redux(reducer, initialStates));
```

- reducer function will receive states and action like Redux. and we can manage our actions using switch.

```js
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
```

- Here action is an object witch is passed from dispatch function.

```js
<PrimaryButton onClick={() => dispatch({ type: types.increase })}>
  +
</PrimaryButton>

<PrimaryButton onClick={() => dispatch({ type: types.increaseBy, payload: 10 })}>
  increase by 10
</PrimaryButton>
```

- We will get states and dispatch function from useStoreRedux hool.

```js
const { count, dispatch } = useStoreRedux();
```

- To manage actions, we have to initialize actions types like...

```js
export const types = {
  increase: "INCREASE",
  decrease: "DECREASE",
  increaseBy: "INCREASE_BY",
  decreaseBy: "DECREASE_BY",
  reset: "RESET",
};
```

**NB:** For better understanding please look up **store.count.redux.js and ActionsLikeRedux.js.** files.
