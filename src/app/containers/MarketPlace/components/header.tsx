import { BadgeComponent } from 'app/components/badge'
import { IMAGES } from 'assets/react_asset_gen'
import React from 'react'
import styled from 'styled-components'
import {  TEXT_16_500, TEXT_24_700 } from 'styles/global-typography'
import {  ROW_JUSTIFY_START__ALIGN_CENTER } from 'styles/globalStyles'

const badges = [
    {
      id: 1,
      icon: IMAGES.colection,
      title: "Collections",
      subtitle: "900"
    },
    {
      id: 2,
      icon:IMAGES.land,
      title: "Lands",
      subtitle: "9.494"
    },
    {
      id: 3,
      icon: IMAGES.miners,
      title: "Miners",
      subtitle: "80.944"
    },
    {
        id: 4,
        icon: IMAGES.soldires,
        title: "Soldiers",
        subtitle: "233"
      },
      {
        id: 5,
        icon: IMAGES.booster,
        title: "Boosters",
        subtitle: "650"
      },
      {
        id: 6,
        icon: IMAGES.shildes,
        title: "Sheilds",
        subtitle: "109"
      },
      {
        id: 7,
        icon: IMAGES.assets,
        title: "Assets",
        subtitle: "900"
      },
    
  ];
  
export const Header = () => {
  return (
    <Container>
        <Topic>
            <Title>
               Welcome to the NFT Marketplace
            </Title>
            <SubTitle>Discover minemasters universe , get your land and build your destiny</SubTitle>
        </Topic>
        <BadgeContainer>
            {badges.map(badge => (
            <BadgeComponent
            key={badge.id}
            icon={badge.icon}
            title={badge.title}
            subtitle={badge.subtitle}
            />
        ))}
        </BadgeContainer>
    </Container>
  )
}

const Container=styled.div`
    margin :0 auto;
`
const Topic=styled.div`
     border-bottom: 1px solid  rgba(90, 24, 154, 0.1);
`
const Title=styled.h1`
    ${TEXT_24_700}
    color: var(--text);
   
`
const SubTitle=styled.p`
   color: rgba(254, 247, 255, 0.7);
   padding-bottom: 24px;
    ${TEXT_16_500}
`
const BadgeContainer=styled.div`
    ${ROW_JUSTIFY_START__ALIGN_CENTER}
    gap:24px;
    margin:24px  92px  70px 0px; 
    flex-wrap: wrap;
`
