import React from 'react'
import { IMAGES } from 'assets/react_asset_gen'
import styled from 'styled-components'
import { TEXT_24_500, TEXT_32_700 } from 'styles/global-typography'
import { COLUMN_ALIGN_START__JUSTIFY_START, COLUMN_JUSTIFY_START__ALIGN_CENTER, ROW_ALIGN_CENTER__SPACE_C, ROW_JUSTIFY_START__ALIGN_CENTER } from 'styles/globalStyles'

const HeadTop = () => {
  return (
    <Wrapper>
        <ContainerOne>
          <Topic>
          <Icon src={IMAGES.spaceTitle}/>
          <Title>Welcome to Mine Masters world</Title>
          </Topic>
          <Text>
            <LinertEXT>Secure your land, deploy miner NFTs.</LinertEXT>
            <BlueText>Opt for peaceful development </BlueText>
            <NormalText>or</NormalText>
          <YellowText>Engage in exhilarating wars</YellowText>
          </Text>
          <LastIcon src={IMAGES.hammer} alt='hammer'/>
        </ContainerOne>
        <ContainerTwo>
          <TitleTwo>Dive into the thrilling realm of
            MineMasters Introduction</TitleTwo>
            <DescTwo>Our game empowers you, promoting financial inclusivity and showcasing limitless innovation in the digital world. It provides immersive gameplay coupled with real-world value generation.</DescTwo>
            <BlueSquareStyle src={IMAGES.bluesquare} alt='Blue Square'/>
            <YellowSquareStyle src={IMAGES.yellowsquare} alt='Blue Square'/>
           
        </ContainerTwo>
    </Wrapper>
  )
}

export default HeadTop
const Wrapper=styled.div`
    width: 100%;
    ${ROW_ALIGN_CENTER__SPACE_C}
    gap:31px;
`
const ContainerOne=styled.div`
width: 786px;
height: 441px;
border-radius: 32px;
background: linear-gradient(94.91deg, rgba(199, 125, 255, 0.1) 0.42%, rgba(90, 24, 154, 0.1) 96.13%);
border: 4px solid  rgba(90, 24, 154, 0.16);
${COLUMN_ALIGN_START__JUSTIFY_START}
padding: 32px 32px 114px 32px;
position: relative;
`
const ContainerTwo=styled.div`
width: 786px;
height: 441px;
border-radius: 32px;
border: 4px solid  rgba(90, 24, 154, 0.16);
background-image: url(${IMAGES.intro});
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: padding-box;
${COLUMN_JUSTIFY_START__ALIGN_CENTER};
padding:90px 28px 63px 82px;
position: relative;
`
const Topic=styled.div`
${ROW_JUSTIFY_START__ALIGN_CENTER}
`
const Title=styled.h1`
${TEXT_32_700}
font-family: 'Ubuntu', sans-serif;
background: linear-gradient(94.91deg, #5A189A 0.42%, #C77DFF 96.13%);
  -webkit-background-clip: text;
  color: transparent;
`
const TitleTwo=styled.h1`
${TEXT_32_700}
font-family: 'Ubuntu', sans-serif;
color:rgba(254, 247, 255, 1);
`
const Icon=styled.img``
const Text=styled.div`
${TEXT_32_700}
`
const NormalText=styled.span`
font-family: 'Ubuntu', sans-serif;
color: #fff;`
const LinertEXT=styled.p`
font-family: 'Ubuntu', sans-serif;
background: linear-gradient(94.91deg, #5A189A 0.42%, #C77DFF 96.13%);
  -webkit-background-clip: text;
  color: transparent;`
const BlueText=styled.span`
font-family: 'Ubuntu', sans-serif;
color: rgba(0, 202, 255, 1);

`
const YellowText=styled.p`
font-family: 'Ubuntu', sans-serif;
color:rgba(255, 193, 77, 1);
`
const LastIcon=styled.img`
position: absolute;
right: 8px;
top: 292px;
`
const DescTwo=styled.p`
font-family: 'Ubuntu', sans-serif;
${TEXT_24_500}
color:#FEF7FF;
`
const BlueSquareStyle=styled.img`
position: absolute;
top: -55px;
right: 555px;
`
  const YellowSquareStyle=styled.img`
  position: absolute;
  top: 355px;
  right: 80px;
  `