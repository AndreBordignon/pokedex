import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Container, LoadContainer, Loading } from "./styles";
import { PokeItem } from "../../components/PokeItem";
import SearchBar from "../../components/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemons,
  fetchMorePokemons,
  findPokemon,
} from "../../redux/actions";

const PokeFeed = ({ navigation }) => {
  const { navigate } = navigation;
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState(false);
  let limit = 12;

  const { data, loading, query } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(page, limit));
  }, []);

  useEffect(() => {
    if (query) {
      setPage(0);
      setSearched(true);
      dispatch(findPokemon(query));
      return;
    }
    dispatch(fetchPokemons(page, limit));
    setSearched(false);
  }, [query]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Container>
        <SearchBar />
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          initialNumToRender={6}
          renderItem={({ item }) => (
            <PokeItem navigation={navigation} item={item} />
          )}
          onEndReached={() => {
            !loading &&
              !searched &&
              (setPage(page + limit),
              dispatch(fetchMorePokemons(page + limit, limit)));
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            loading && (
              <LoadContainer>
                <Loading color="#f66a70" />
              </LoadContainer>
            )
          }
        />
      </Container>
    </SafeAreaView>
  );
};

export default PokeFeed;
