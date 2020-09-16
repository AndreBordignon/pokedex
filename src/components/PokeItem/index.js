import React, { memo } from "react";

import {
  PokemonCard,
  PokemonId,
  PokemonInfos,
  Title,
  PokemonTypes,
  TypeContainer,
  TypeTitle,
  PokemonImageContainer,
  PokemonImage,
  CardBackground,
} from "./styles";
import BadgeIcon from "../../components/BadgeIcon";
import { formatPokemonId } from "../../constants/functions";

export const PokeItem = memo(({ navigation, item }) => {
  const { id, name, types } = item;

  return (
    <PokemonCard
      key={name}
      type={types[0].type.name}
      onPress={() => navigation.navigate("Details", item)}
    >
      <CardBackground source={require("../../assets/img/background-card.png")}>
        <PokemonInfos>
          <PokemonId># {formatPokemonId(id)}</PokemonId>
          <Title>{name}</Title>
          <PokemonTypes>
            {types.map((item) => (
              <TypeContainer key={item.type.name} type={item.type.name}>
                <BadgeIcon type={item.type.name} />
                <TypeTitle>{item.type.name}</TypeTitle>
              </TypeContainer>
            ))}
          </PokemonTypes>
        </PokemonInfos>
        <PokemonImageContainer>
          <PokemonImage
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatPokemonId(
                id
              )}.png`,
            }}
            resizeMode="contain"
          />
        </PokemonImageContainer>
      </CardBackground>
    </PokemonCard>
  );
});
