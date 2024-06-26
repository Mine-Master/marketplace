import React from 'react'
import { SecondaryButton } from 'app/components/button/secondaryButton'
import { Card } from 'app/components/card'
import { IMAGES } from 'assets/react_asset_gen'
import styled from 'styled-components'
import {  TEXT_24_700 } from 'styles/global-typography'
import { ROW_ALIGN_CENTER__SPACE_B } from 'styles/globalStyles'

const sampleCards = [
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 578', usdPrice: '10.70 USD', xcnPrice: '10 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
    
  ];
export const Tops = () => {
  return (
    <Wrapper>
        <Header>
            <Topic>Top Lands</Topic>
            <SecondaryButtons icon={IMAGES.arrowIcon}>view all</SecondaryButtons>
        </Header>
        <Container>
          {sampleCards.map((card, index) => (
             <Card
               key={index}
               iconSrc={card.iconSrc}
               landNum={card.landNum}
                usdPrice={card.usdPrice}
                xcnPrice={card.xcnPrice}
                    />
                ))}
        </Container>
        <Header>
            <Topic>Top Miners</Topic>
            <SecondaryButtons icon={IMAGES.arrowIcon}>view all</SecondaryButtons>
        </Header>
        <Container>
          {sampleCards.map((card, index) => (
             <Card
               key={index}
               iconSrc={card.iconSrc}
               landNum={card.landNum}
                usdPrice={card.usdPrice}
                xcnPrice={card.xcnPrice}
                    />
                ))}
        </Container>
        <Header>
            <Topic>Top Soldires</Topic>
            <SecondaryButtons icon={IMAGES.arrowIcon}>view all</SecondaryButtons>
        </Header>
        <Container>
          {sampleCards.map((card, index) => (
             <Card
               key={index}
               iconSrc={card.iconSrc}
               landNum={card.landNum}
                usdPrice={card.usdPrice}
                xcnPrice={card.xcnPrice}
                    />
                ))}
        </Container>
    </Wrapper>
  )
}


const Wrapper =styled.div``
const Header=styled.div`
  ${ROW_ALIGN_CENTER__SPACE_B}
  border-bottom: 1px solid  rgba(90, 24, 154, 0.1);
`
const Topic=styled.h1`
  ${TEXT_24_700}
  color:#C77DFF;
`
const SecondaryButtons=styled(SecondaryButton)`
    width: 126px;
    height: 60px;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 90px;
`;
