import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";
import { LocationProvider, useLocation } from "./src/hooks/useLocation";
import Screen from "./src/screens/Screen";

export default function App() {
  const { nextPage } = useLocation();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <LocationProvider>
        <Screen />
      </LocationProvider>
    </ThemeProvider>
  );
}
