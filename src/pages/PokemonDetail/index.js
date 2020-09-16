import React from "react";
import {
  Container,
  ScrollView,
  PokeHeader,
  PokemonInfoContainer,
  BoxMainInfos,
  PokemonImage,
  PokemonTypes,
  TypeContainer,
  TypeTitle,
  Title,
  MainStats,
  StatsTitle,
  StatsBox,
  StatName,
  ProgressBar,
  Progress,
  Value,
} from "./styles";
import BadgeIcon from "../../components/BadgeIcon";
import { formatPokemonId } from "../../constants/functions";

const PokemonDetail = ({ route }) => {
  const { name, stats, abilities, types, id, sprites } = route.params,
    mainType = types[0].type.name;

  return (
    <ScrollView type={mainType}>
      <PokeHeader>
        <PokemonInfoContainer
          source={require("../../assets/img/patterns/details.png")}
          resizeMode="cover"
        >
          <PokemonImage
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatPokemonId(
                id
              )}.png`,
            }}
          />
          <BoxMainInfos>
            <Title>{name}</Title>
            <PokemonTypes>
              {types.map((item) => (
                <TypeContainer key={item.type.name} type={item.type.name}>
                  <BadgeIcon type={item.type.name} />
                  <TypeTitle>{item.type.name}</TypeTitle>
                </TypeContainer>
              ))}
            </PokemonTypes>
          </BoxMainInfos>
        </PokemonInfoContainer>
      </PokeHeader>
      <MainStats>
        <StatsTitle type={mainType}>{name} Base stats</StatsTitle>
        {stats.map((item) => {
          return (
            <StatsBox key={item.stat.name}>
              <StatName>{item.stat.name}</StatName>
              <ProgressBar>
                <Progress progress={item.base_stat} type={mainType} />
              </ProgressBar>
              <Value>{item.base_stat}</Value>
            </StatsBox>
          );
        })}
      </MainStats>
    </ScrollView>
  );
};

export default PokemonDetail;
