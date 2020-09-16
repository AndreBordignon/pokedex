import styled from "styled-components/native";
import { pokemonColor, typeColors } from "../../constants/colors";

export const PokemonCard = styled.TouchableOpacity`
  border-radius: 12px;
  background: ${(props) => pokemonColor[props.type]};
  min-width: 330px;
  height: 130px;
  width: 95%;
  margin: 20px auto 20px;
`;
export const PokemonInfos = styled.View`
  flex-direction: column;
`;
export const PokemonTypes = styled.View`
  flex-direction: row;
`;
export const TypeContainer = styled.View`
  flex-direction: row;
  border-radius: 8px;
  padding: 8px;
  margin: 10px 10px 0 0;
  background-color: ${(props) => typeColors[props.type]};
  min-width: 50px;
  align-items: center;
  justify-content: center;
`;
export const TypeTitle = styled.Text`
  font-family: sf-pro-display-regular;
  color: #fff;
  font-size: 13px;
  margin: 0px 8px;
`;
export const PokemonId = styled.Text`
  font-family: sf-pro-display-medium;
  color: rgba(23, 23, 27, 0.6);
  font-size: 14px;
`;
export const Title = styled.Text`
  font-family: sf-pro-display-bold;
  color: #fff;
  font-size: 26px;
  text-transform: capitalize;
`;
export const PokemonImage = styled.Image`
  width: 135px;
  height: 135px;
  position: absolute;
  right: -15px;
  top: -100px;
`;

export const PokemonImageContainer = styled.View`
  align-self: center;
  justify-content: flex-start;
`;

export const CardBackground = styled.ImageBackground`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
