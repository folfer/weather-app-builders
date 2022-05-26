
export interface IHome {
  data?: any;
}

export interface IHomeLayout extends IHome {
  title: string;
}

export interface IHomeLayoutCards
  extends Pick<IHomeLayout, | 'title'> { }