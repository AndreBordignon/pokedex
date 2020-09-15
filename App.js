if (__DEV__) {
  import("./ReactotronConfig");
}
import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/Routes";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
