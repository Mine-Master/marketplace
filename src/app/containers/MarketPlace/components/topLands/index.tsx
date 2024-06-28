import React from 'react'
import styled from 'styled-components'
import TopHead from 'app/components/topHead';
import { IMAGES } from 'assets/react_asset_gen';
import { Card } from 'app/components/card';

const landPrices = [
  { num: '10.000', subNum: 'Listed' },
  { num: '19.000', subNum: 'Items' },
  { num: '0.00089 XCN', subNum: 'Floor Price' },
];


export const sampleCards = [
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 578', usdPrice: '10.70 USD', xcnPrice: '10 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 578', usdPrice: '10.70 USD', xcnPrice: '10 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
  { iconSrc: `${IMAGES.fadeland}`, landNum: '# Land 579', usdPrice: '15.20 USD', xcnPrice: '15 XCN'},
];

const numberOfLands = 934;

const TopLandCollections: React.FC = () => {
  return (
    <Wrapper>
      <TopHead
        title={`Lands ${numberOfLands}`} 
        subtitle="Discover the optimal location for becoming the ultimate Mine Master" 
        prices={landPrices} 
        starText="345" 
        iconSrc={IMAGES.topLand}
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
export default TopLandCollections

const Wrapper=styled('div')``

const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 90px;
`;