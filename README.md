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

- We can change state value using methods in callback function. The callback function can receive a function which to be returend by method, and this function pass another callback function and it can receive state. This callback function return an object with property we want to change. ( little complicated - keep eyes on the code and read explanation )

```js
// BLOCK - 2
const useStore = create((set => ({
 count: 0,
 increaseCount: () => set((state) => ({ count: state.count + 1 })),
 decreaseCount: () => set((state) => ({ count: state.count - 1 })),

}));
```

Here callback function of create() reaceived a function named **set** which is returned by different methods. The set function passes a callback function which can receive our states and return an object. In this object we change our state value.

```js
// BLOCK - 2
const useStore = create((set => ({
 count: 0,
 increaseBy: (num) => set((state) => ({ count: state.count + num })),
 resetCount: () => set(() => ({ count: 0 })),
}));
```

The methods can receive params and we can use them for changing state value. Look at increaseBy method. It received a param num and num has been used to change the value of count state. Now look at resetCount method. We can fix the value of our state like this.
