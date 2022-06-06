import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { IHomeLayoutCards } from "../data";

import {
  Container,
  Description,
  DescriptionData,
  DetailsContainer,
  Header,
  Icon,
  IconWater,
  IconWind,
  Image,
  LocationCity,
  LocationContainer,
  TempDescription,
  TextLoading,
  Title,
  TitleDescription,
  TodayDetails,
  Wrapped,
  WrappedColumn,
  WrappedContainers,
  WrappedIcon,
  WrappedImage,
  WrappedLoadingContainer,
} from "./styles";

export const Home = ({ errorMsg, locationData, success }: IHomeLayoutCards) => {
  const [colorDays, setColorDays] = useState<string>("");

  useEffect(() => {
    if (locationData) {
      const colorDay = locationData.weather[0].icon.includes("d");
      if (!colorDay) {
        setColorDays(
          "https://i.ibb.co/BsK3RPk/41c8f786915df54fa6398e91a04307b6.jpg"
        );
      } else {
        setColorDays(
          "https://i.ibb.co/v4BfCzm/nuvem-branca-no-ceu-azul-74190-2381.webp"
        );
      }
    }
  }, []);

  return (
    <Container colors={["#060618", "#2A2A63"]}>
      {success ? (
        <>
          <Header>
            <Icon name="location" size={20} color="#E3BC2D" />
            <LocationCity>
              {locationData && locationData?.name},{" "}
              {locationData && locationData?.sys.country}
            </LocationCity>
          </Header>
          <TodayDetails>Today’s details</TodayDetails>

          <WrappedContainers>
            <WrappedImage>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${
                    locationData && locationData?.weather[0].icon
                  }@4x.png`,
                }}
              />
            </WrappedImage>

            <TitleDescription>
              {locationData && locationData?.weather[0].main}
            </TitleDescription>
            <Title>
              {locationData && (locationData?.main.temp - 273.15).toFixed(0)}°
            </Title>
            <LocationContainer>
              <DetailsContainer>
                <WrappedIcon>
                  <IconWater name="water" size={20} color="#E3BC2D" />
                </WrappedIcon>
                <DescriptionData>
                  {locationData && locationData?.main.humidity}%
                </DescriptionData>
                <Description>Humidity</Description>
              </DetailsContainer>
              <DetailsContainer>
                <WrappedIcon>
                  <IconWind name="wind" size={20} color="#E3BC2D" />
                </WrappedIcon>
                <DescriptionData>
                  {locationData && locationData?.wind.speed} km/h
                </DescriptionData>
                <Description>Wind</Description>
              </DetailsContainer>
            </LocationContainer>
          </WrappedContainers>
        </>
      ) : (
        <WrappedLoadingContainer>
          <ActivityIndicator />
          <TextLoading>
            Searching for your location and loading the data.
          </TextLoading>
        </WrappedLoadingContainer>
      )}
    </Container>
  );
};
