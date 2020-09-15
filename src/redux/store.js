import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reactotron from "../../ReactotronConfig";
import pokemonReducer from "./reducers";

const store = createStore(
  pokemonReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer())
);

export default store;
