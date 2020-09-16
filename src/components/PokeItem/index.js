import React from "react";

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

const PokeItem = ({ navigation, item, types, id, name, sprites }) => {
  return (
    <PokemonCard
      type={types[0].type.name}
      onPress={() =>
        navigation.navigate("Details", { item, name, types, id, sprites })
      }
    >
      <CardBackground source={require("../../assets/img/background-card.png")}>
        <PokemonInfos>
          <PokemonId>#{id}</PokemonId>
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
          <PokemonImage source={{ uri: sprites }} width="120" height="100" />
        </PokemonImageContainer>
      </CardBackground>
    </PokemonCard>
  );
};

export default PokeItem;
