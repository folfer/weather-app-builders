import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export const Container = styled(LinearGradient)`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(EvilIcons)``;
export const IconWater = styled(Ionicons)``;
export const IconWind = styled(Feather)``;

export const Header = styled.View`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const WrappedContainers = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const Wrapped = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const WrappedColumn = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 96px;
  line-height: 113px;

  color: #ffffff;
`;

export const TempDescription = styled.Text`
  font-size: 14px;
  color: #000000;
  font-weight: 400;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const WrappedImage = styled.View`
  width: 200px;
  height: 200px;

  background: rgba(139, 156, 219, 0.0122222);
  filter: blur(100px);

  border-radius: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const TitleDescription = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;

  margin-top: 32px;
  margin-bottom: 16px;
`;

export const LocationContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  margin-top: 32px;
`;

export const LocationCity = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;

export const TodayDetails = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;

  margin-top: 55px;
`;

export const DetailsContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 25px;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  margin-top: 12px;
`;

export const DescriptionData = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;

  margin-top: 12px;
`;

export const WrappedIcon = styled.View`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  background-color: #2a2a63;
`;

export const WrappedLoadingContainer = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextLoading = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;

  margin-top: 32px;
`;
