import * as React from "react";
import { Text } from "react-native";
import { IHomeLayoutCards } from "../data";
import { Container, Title } from "./styles";

export const Home = ({ title }: IHomeLayoutCards) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
