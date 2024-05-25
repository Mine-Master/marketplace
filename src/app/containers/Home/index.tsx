/**
 *
 * Home
 *
 */

import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { homeSaga } from "./saga";
import { selectHome } from "./selectors";
import { homeReducer, sliceKey } from "./slice";
import styled from "styled-components";
import HeadTop from "./components/headTop";
import { Wrapper } from "./styles";
import Mechanism from "./components/mechanism";

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Container>
      <HeadTop/>
      <Mechanism/>
      </Container>  
    </Wrapper>
  );
}
const Container=styled.div`
  width: 100%;
  background-color:  #070012CC;

`