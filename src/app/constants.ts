import { ITabs } from "./types";
import { IMAGES } from "assets/react_asset_gen";
export const Val = "";

export const TABS: ITabs = {
  //DO NOT REMOVE THIS COMMENT
  // MainPage: {
  //   name: 'MainPage',
  //   img: metricsIcon,
  //   routeTo: AppPages.HomePage,
  // },
  Home: {
    name: "Home",
    img: IMAGES.home,
    hoverImg: IMAGES.homeHover,
    routeTo: "/",
  },
  MarketPlace: {
    name: "MarketPlace",
    img: IMAGES.Marplace,
    hoverImg: IMAGES.marketplaceHover,
    routeTo: "/marketPlace",
  },
  Events: {
    name: "Events",
    img: IMAGES.events,
    hoverImg: IMAGES.eventsHover,
    routeTo: "/events",
  },
  About: {
    name: "About",
    img: IMAGES.about,
    hoverImg: IMAGES.aboutHover,
    routeTo: "/about",
  },
  Support: {
    name: "Support",
    img: IMAGES.support,
    hoverImg: IMAGES.supportHover,
    routeTo: "/support",
  },
};
