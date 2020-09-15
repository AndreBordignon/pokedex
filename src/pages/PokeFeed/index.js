import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { Container } from "./styles";
import PokeItem from "../../components/PokeItem";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, fetchMorePokemons } from "../../redux/actions";

const PokeFeed = (props) => {
  const [page, setPage] = useState(0);
  let limit = 12;

  const { data, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(page, limit));
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokeItem
            name={item.name}
            id={item.id}
            avatar={item.sprites.front_default}
            types={item.types}
          />
        )}
        onEndReached={() => {
          setPage(page + limit);
          dispatch(fetchMorePokemons(page + limit, limit));
        }}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" /> : null
        }
      />
    </Container>
  );
};

export default PokeFeed;
