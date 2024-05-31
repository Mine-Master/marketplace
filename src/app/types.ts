export enum AppPages {
  RootPage = "/",
  HomePage = "/home",
  NotFoundPage = "*",
  AboutMe = "/aboutMe",
  MarketPlace="/marketPlace"
  // [INSERT NEW PAGE PATH ABOVE] < Needed for generating containers seamlessly
}
export enum Themes {
  DARK = "DARK",
  LIGHT = "LIGHT",
  DRACULA = "DRACULA",
  SOLAR = "SOLAR",
  NORD = "NORD",
  DISCORD = "DISCORD",
  MIDNIGHT = "MIDNIGHT",
  LOCA = "LOCA",
}

type ITab = {
  name: string;
  img: string;
  hoverImg: string;
  routeTo: string;
};

export type ITabs = {
  [key: string]: {
    name: string;
    img: string;
    hoverImg: string;
    routeTo: string;
    children?: ITab[];
  };
};
