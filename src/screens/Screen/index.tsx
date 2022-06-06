import React from "react";
import { View } from "react-native";
import { useLocation } from "../../hooks/useLocation";
import { Home } from "../Home";
import { InitialScreen } from "../InitialScreen";

const Screen: React.FC = () => {
  const { nextPage } = useLocation();
  return (
    <View style={{ flex: 1 }}>{nextPage ? <Home /> : <InitialScreen />}</View>
  );
};

export default Screen;
