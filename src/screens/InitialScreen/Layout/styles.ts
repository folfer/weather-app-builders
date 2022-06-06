import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.Image`
  width: 250px;
  height: 250px;
`;

export const WrappedInformations = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 22px;
`;

export const WrappedTitle = styled.View`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`;

export const SubTitle = styled.Text`
  font-weight: 400;
  font-size: 40px;
  color: #e3bc2d;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e3bc2d;

  border-radius: 12px;
  padding: 20px;
  margin-top: 60px;
`;

export const TextButton = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #26265d;
`;
