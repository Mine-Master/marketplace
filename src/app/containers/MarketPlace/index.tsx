/**
 *
 * MarketPlace
 *
 */

import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { marketPlaceSaga } from "./saga";
import { selectMarketPlace } from "./selectors";
import { marketPlaceReducer, sliceKey } from "./slice";
import { Wrapper } from "./styles";
import { Header } from "./components/header";
import {TableCollection} from "./components/tableCollection"
import { Tops } from "./components/tops";

interface Props {}

export function MarketPlace(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: marketPlaceReducer });
  useInjectSaga({ key: sliceKey, saga: marketPlaceSaga });
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const marketPlace = useSelector(selectMarketPlace);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Helmet>
        <title>MarketPlace</title>
        <meta name="description" content="Description of MarketPlace" />
      </Helmet>
      <Header/>
      <TableCollection/>
      <Tops/>
    </Wrapper>
  );
}
