import * as React from "react";

import { IInitialScreenLayoutCards } from "../data";

import {
  Button,
  Container,
  Description,
  ImageContainer,
  SubTitle,
  TextButton,
  Title,
  WrappedInformations,
  WrappedTitle,
} from "./styles";

export const InitialScreen = ({
  handleNextPage,
}: IInitialScreenLayoutCards) => {
  return (
    <Container colors={["#060618", "#2A2A63"]}>
      <ImageContainer
        source={{ uri: "https://i.ibb.co/NFZZHKz/Group-9.png" }}
      />
      <WrappedInformations>
        <WrappedTitle>
          <Title>Weather</Title>
          <SubTitle>cast</SubTitle>
        </WrappedTitle>
        <Description>
          Share your location with our software so that we can find out the
          temperature of your environment.
        </Description>
        <Button onPress={handleNextPage}>
          <TextButton>Get started</TextButton>
        </Button>
      </WrappedInformations>
    </Container>
  );
};
