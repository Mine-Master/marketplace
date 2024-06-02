/**
 *
 * Asynchronously loads the component for MarketPlace
 *
 */
import { PageLoading } from "app/components/pageLoading";
import { lazyLoad } from "common/loadable";

export const MarketPlace = lazyLoad(
  () => import("./index"),
  (module) => module.MarketPlace,
  { fallback: <PageLoading /> }
);
