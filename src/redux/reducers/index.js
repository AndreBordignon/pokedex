import { DATA_FETCHED, DATA_FETCHING, FETCH_MORE } from "../actions";

const initialState = {
  data: [],
  loading: false,
  query: "",
};

export default pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCHED:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case DATA_FETCHING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
