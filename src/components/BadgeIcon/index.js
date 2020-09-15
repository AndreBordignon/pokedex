import React from "react";
import { View } from "react-native";

import { Container, Image } from "./styles";
import { icons } from "../../constants/badges";

const BadgeIcon = (props) => {
  const { type } = props;
  return (
    <Container>
      <Image resizeMode="contain" source={icons[type]} />
    </Container>
  );
};

export default BadgeIcon;
