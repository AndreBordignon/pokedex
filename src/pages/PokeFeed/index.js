import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Container, LoadContainer, Loading } from "./styles";
import PokeItem from "../../components/PokeItem";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons, fetchMorePokemons } from "../../redux/actions";

const PokeFeed = ({ navigation }) => {
  const { navigate } = navigation;
  const [page, setPage] = useState(0);
  let limit = 6;

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
        initialNumToRender={6}
        renderItem={({ item }) => (
          <PokeItem
            item={item}
            name={item.name}
            key={item.id}
            id={item.id}
            sprites={item.sprites.other.dream_world.front_default}
            types={item.types}
            navigation={navigation}
            onPress={(item) => navigate("Details", item)}
          />
        )}
        onEndReached={() => {
          !loading &&
            (setPage(page + limit),
            dispatch(fetchMorePokemons(page + limit, limit)));
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <LoadContainer>
            <Loading />
          </LoadContainer>
        )}
        refreshing={loading}
      />
    </Container>
  );
};

export default PokeFeed;
