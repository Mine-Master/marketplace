import { IMAGES } from 'assets/react_asset_gen'
import React from 'react'
import styled from 'styled-components'

const Mechanism = () => {
  return (
    <Wrapper>
        <Title>Game Mechanism</Title>
    </Wrapper>
  )
}

export default Mechanism
const Wrapper = styled.div`
  background-image:url(${IMAGES.rockback});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: padding-box;
  /* width: 100%; */
  height: 457px;
  margin-top: 95px;
`
const Title = styled.h1`
font-family: 'Ubuntu', sans-serif;
background: linear-gradient(94.91deg, #5A189A 0.42%, #C77DFF 96.13%);
  -webkit-background-clip: text;
  color: transparent;
`