import * as React from "react";
import { useState, useEffect } from "react";
import { IHome } from "./data";
import * as Location from "expo-location";

import { Home as Layout } from "./Layout";
import { ILocationProps } from "../../utils/types";

export const Home = (props: IHome) => {
  const [locationData, setLocationData] = useState<ILocationProps>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=5fe39eff2e8db3ddedbefadd5e9456b8`
      )
        .then((res) => res.json())
        .then((data) => {
          setLocationData(data);
          setSuccess(true);
        });
    })();
  }, []);

  const layoutProps = {
    ...props,
    locationData,
    errorMsg,
    success,
  };

  return <Layout {...layoutProps} />;
};
