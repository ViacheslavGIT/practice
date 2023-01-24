# Redux Toolkit

#### Docs

[Redux Toolkit Docs](https://redux-toolkit.js.org/introduction/getting-started)

#### Install Template

```sh
npx create-react-app my-app
```

#### Existing App

```sh
npm install @reduxjs/toolkit react-redux
```

#### @reduxjs/toolkit

consists of few libraries

- redux (core library, state management)
- immer (allows to mutate state)
- redux-thunk (handles async actions)
- reselect (simplifies reducer functions)

#### Extras

- redux devtools
- combine reducers

#### react-redux

Connects app to Redux

#### Setup Store

- create store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

#### Setup Provider

- index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import store and provider
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  document.getElementById("root")
);
```

#### Setup Counter Slice

- slices are like features inside any app or entity
- create features folder
- create counterSlice.js (as an example)

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 101,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
});

export default counterSlice.reducer;
```

- store/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

#### Redux DevTools

- extension

#### Access store value

- create App.jsx

```js
import { useSelector } from "react-redux";

const App = () => {
  const { count } = useSelector((store) => store.counter);

  return (
    <div className="nav-center">
      <h3>Redux toolkit</h3>
      <h4>{count}</h4>
    </div>
  );
};
export default App;
```
