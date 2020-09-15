export const fetchPokemonsList = (page, limit) => {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;

        const AllPokemons = results.map((item) => {
          return fetch(item.url).then((response) => response.json());
        });
        return Promise.all(AllPokemons);
      })
      .then((data) => {
        resolve(data);
        return data;
      })
      .catch((error) => reject(error));
  });
};
