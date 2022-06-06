import * as React from "react";
import { useLocation } from "../../hooks/useLocation";
import { IInitialScreen } from "./data";

import { InitialScreen as Layout } from "./Layout";

export const InitialScreen = (props: IInitialScreen) => {
  const { setNextPage } = useLocation();

  const handleNextPage = () => {
    setNextPage(true);
  };

  const layoutProps = {
    ...props,
    handleNextPage,
  };

  return <Layout {...layoutProps} />;
};
