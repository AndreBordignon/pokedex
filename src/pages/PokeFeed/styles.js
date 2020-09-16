import styled from "styled-components/native";

export const Container = styled.View`
  flex-grow: 0;
  height: 100%;
`;
export const LoadContainer = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator`
  margin: 15px 0px;
  align-self: center;
`;
