import styled from "styled-components/native";
import { pokemonColor } from "../../constants/colors";

export const PokemonCard = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 12px;
  background: ${(props) => pokemonColor[props.type]};
  height: 120px;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  padding: 10px;
  margin: 8px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const TypeTitle = styled.Text`
  color: #000;
  font-size: 13px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;
export const PokemonImage = styled.Image`
  width: 70px;
  height: 70px;
`;
