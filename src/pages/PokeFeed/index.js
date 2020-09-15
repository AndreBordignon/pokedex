import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Container, LoadContainer } from "./styles";
import PokeItem from "../../components/PokeItem";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, fetchMorePokemons } from "../../redux/actions";

const PokeFeed = () => {
  const [page, setPage] = useState(0);
  let limit = 8;

  const { data, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(page, limit));
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        initialNumToRender={8}
        renderItem={({ item }) => (
          <PokeItem
            name={item.name}
            key={item.id}
            id={item.id}
            avatar={item.sprites.front_default}
            types={item.types}
          />
        )}
        onEndReached={() => {
          !loading &&
            (setPage(page + limit),
            dispatch(fetchMorePokemons(page + limit, limit)));
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && (
            <LoadContainer>
              <ActivityIndicator
                size="small"
                style={{ alignSelf: "center" }}
                color="red"
              />
            </LoadContainer>
          )
        }
      />
    </Container>
  );
};

export default PokeFeed;
