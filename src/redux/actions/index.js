import { fetchPokemonsList } from "../services/pokemons";

export const DATA_FETCHED = "DATA_FETCHED";
export const DATA_FETCHING = "DATA_FETCHING";
export const FETCH_MORE = "FECTH_MORE";

export const fetchPokemons = (page, limit) => {
  return function (dispatch) {
    dispatch(loading(true));
    fetchPokemonsList(page, limit)
      .then((res) => {
        dispatch(pokeListFetch(res));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(loading(false));
      });
  };
};

export const fetchMorePokemons = (page, limit) => {
  return function (dispatch) {
    dispatch(loading(true));
    fetchPokemonsList(page, limit)
      .then((res) => {
        dispatch(fetchMore(res));
        dispatch(loading(false));
      })
      .catch(() => {
        dispatch(loading(false));
      });
  };
};

const pokeListFetch = (data) => ({
  type: DATA_FETCHED,
  payload: data,
});

const fetchMore = (data) => ({
  type: FETCH_MORE,
  payload: data,
});

export const loading = (loader) => ({
  type: DATA_FETCHING,
  payload: loader,
});
