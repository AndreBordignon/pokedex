import React from "react";

import {
  PokemonCard,
  PokemonInfos,
  Title,
  PokemonTypes,
  TypeContainer,
  TypeTitle,
  PokemonImage,
} from "./styles";

const PokeItem = ({ types, name, avatar }) => {
  return (
    <PokemonCard type={types[0].type.name}>
      <PokemonInfos>
        <Title>{name}</Title>
        <PokemonTypes>
          {types.map((item) => (
            <TypeContainer>
              <TypeTitle>{item.type.name}</TypeTitle>
            </TypeContainer>
          ))}
        </PokemonTypes>
      </PokemonInfos>
      <PokemonImage source={{ uri: avatar }} resizeMode="contain" />
    </PokemonCard>
  );
};

export default PokeItem;
