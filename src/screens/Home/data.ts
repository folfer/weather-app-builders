import { ILocationProps } from "../../utils/types";

export interface IHome {
  data?: any;
}

export interface IHomeLayout extends IHome {
  errorMsg: string;
  locationData?: ILocationProps;
  success: boolean;
}

export interface IHomeLayoutCards
  extends Pick<IHomeLayout, "errorMsg" | "locationData" | "success"> {}
