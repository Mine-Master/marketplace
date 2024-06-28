import React from 'react'
import styled from 'styled-components'
import TopHead from 'app/components/topHead';
import { IMAGES } from 'assets/react_asset_gen';
import { Card } from 'app/components/card';
import { sampleCards } from '../topLands';

const landPrices = [
  { num: '10.000', subNum: 'Listed' },
  { num: '19.000', subNum: 'Items' },
  { num: '0.00089 XCN', subNum: 'Floor Price' },
];
const numberOfLands = 3456;

const TopSoldierCollections: React.FC = () => {
  return (
    <Wrapper>
      <TopHead
        title={`Soldier ${numberOfLands}`} 
        subtitle="Discover my new planet" 
        prices={landPrices} 
        starText="345" 
        iconSrc={IMAGES.topSoldiers}
      />
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
  );
};


export default TopSoldierCollections

const Wrapper=styled('div')``

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 90px;
`;