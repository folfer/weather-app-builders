import { ILocationProps } from "../../utils/types";

export interface IInitialScreen {
  data?: any;
}

export interface IInitialScreenLayout extends IInitialScreen {
  handleNextPage(): void;
}

export interface IInitialScreenLayoutCards
  extends Pick<IInitialScreenLayout, "handleNextPage"> {}
