import * as React from "react";
import { useState } from "react";
import { IHome } from "./data";

import { Home as Layout } from "./Layout";

export const Home = (props: IHome) => {
  const title = "Welcome to weather app!";

  const layoutProps = {
    ...props,
    title,
  };

  return <Layout {...layoutProps} />;
};
