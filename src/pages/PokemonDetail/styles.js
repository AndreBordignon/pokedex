import styled from "styled-components/native";
import { pokemonColor, typeColors } from "../../constants/colors";
import SvgUri from "react-native-svg-uri";

export const Container = styled.SafeAreaView``;

export const ScrollView = styled.ScrollView`
  background-color: ${(props) => pokemonColor[props.type]};
  height: 100%;
`;

export const PokeHeader = styled.View`
  height: 300px;
  justify-content: center;
  margin: 0 auto;
`;
export const PokemonInfoContainer = styled.ImageBackground`
  align-self: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;
export const PokemonImage = styled(SvgUri)`
  margin: 10px;
`;
export const BoxMainInfos = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: sf-pro-display-bold;
  color: #fff;
  font-size: 32px;
  text-transform: capitalize;
  margin-top: 25px;
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
  min-width: 100px;
  max-height: 40px;
  align-items: center;
  justify-content: center;
`;

export const TypeTitle = styled.Text`
  font-family: sf-pro-display-medium;
  color: #fff;
  font-size: 13px;
  margin: 0px 8px;
`;

export const MainStats = styled.View`
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  min-height: 490px;
  padding: 25px;
`;
export const StatsTitle = styled.Text`
  font-family: sf-pro-display-bold;
  font-size: 16px;
  color: ${(props) => typeColors[props.type]};
  text-transform: capitalize;
  margin: 0px 0px 20px;
`;
export const StatsBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 8px 12px 0;
`;
export const StatName = styled.Text`
  font-family: sf-pro-display-bold;
  font-size: 14px;
  width: 120px;
  text-align: left;
  text-transform: capitalize;
`;
export const ProgressBar = styled.View`
  flex-grow: 1;
  align-items: flex-start;
`;
export const Progress = styled.View`
  background: ${(props) => typeColors[props.type]};
  height: 4px;
  width: ${(props) => (props.progress / 2) * 2}px;
  border-radius: 2px;
  border-color: ${(props) => pokemonColor[props.type]};
`;

export const Value = styled.Text`
  font-family: sf-pro-display-medium;
  font-size: 12px;
  text-align: left;
`;
