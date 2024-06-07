import { PrimaryButton } from 'app/components/button/primaryButton';
import { SecondaryButton } from 'app/components/button/secondaryButton';
import { IMAGES } from 'assets/react_asset_gen';
import React from 'react'
import styled from 'styled-components';
import { TEXT_12_700, TEXT_14_700, TEXT_16_700, TEXT_24_700 } from 'styles/global-typography';
import { COLUMN_ALIGN_END__JUSTIFY_END, ROW_ALIGN_CENTER__SPACE_B, ROW_ALIGN_START__SPACE_B, ROW_JUSTIFY_END__ALIGN_CENTER, ROW_JUSTIFY_START__ALIGN_CENTER } from 'styles/globalStyles';


  const products = [
    {
      icon: `${IMAGES.minersmallicon}`,
      name: "Product 1",
      number: 1,
      priceUSD: 10.000,
      priceXCN: 500.000,
    },
    {
      icon: `${IMAGES.landsmallicon}`,
      name: "Product 2",
      number: 2,
      priceUSD: 20.000,
      priceXCN: 10.000,
    },
    {
        icon: `${IMAGES.soldiersmallicon}`,
        name: "Product 2",
        number: 2,
        priceUSD: 20.000,
        priceXCN: 10.000,
      },
  ];
  
export const CartModal  = () => {
  return (
    <ModalContainer>
      <TopWrapper>

       <Wrapper>
          <CartItems>3 items</CartItems>
          <SecondaryButton >Clear all</SecondaryButton>
       </Wrapper>
       <ListItems>
       {products.map((product, index) => (
       <CartProduct key={index}>
         <LeftSideCart>
            <IconStyle src={product.icon} alt={product.name} />
             <Text>
               <Title>{product.name}</Title>
               <SubTitle>#{product.number}</SubTitle>
             </Text>
         </LeftSideCart>
         <RightSideCart>
            <UsdPrice>${product.priceUSD}</UsdPrice>
            <Xcn>
                <XcnIcon src={IMAGES.priceiconxcn} alt='xcn icon'/>
                <XcnPrice>{product.priceXCN}</XcnPrice>
            </Xcn>
         </RightSideCart>
       </CartProduct>
       ))}
       </ListItems>
      </TopWrapper>
      <BottomWrapper>

       <Total>
          <TotalPrice>Total Price</TotalPrice>
          <RightSideTotal>
            <UsdPrice>$6000.0</UsdPrice>    
            <TotalXcnPrice>403.000XCN</TotalXcnPrice>   
         </RightSideTotal>
       </Total>
         <PrimaryButtons>Complete Purchase</PrimaryButtons>
      </BottomWrapper>
    </ModalContainer>
  )
}

const TopWrapper=styled('div')`
  display: flex;
  flex-direction: column;
`
const BottomWrapper=styled('div')`
  display: flex;
  flex-direction: column;
`
const ModalContainer=styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const Wrapper=styled('div')`
    ${ROW_ALIGN_CENTER__SPACE_B}
    margin-bottom: 24px;

`
const CartItems =styled('span')`
  ${TEXT_24_700}
  color: var(--primary);
`
const CartProduct=styled('div')`
  width:100%;
  ${ROW_ALIGN_CENTER__SPACE_B}
  border: 1px solid var(--primary);
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 16px;
`
const LeftSideCart=styled('div')`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
  gap:8px;
`
const IconStyle=styled('img')``
const Text=styled('div')``
const Title=styled('h1')`
  margin: 0;
  ${TEXT_16_700}
  color:var(--text);
`
const SubTitle=styled('span')`
  color: #C77DFF;
${TEXT_12_700}
`
const RightSideCart=styled('div')`
  ${COLUMN_ALIGN_END__JUSTIFY_END}
`
const UsdPrice=styled('span')`
   color: var(--primary);
   ${TEXT_14_700}
`
const Xcn=styled('div')`
  ${ROW_JUSTIFY_END__ALIGN_CENTER}
`
const XcnIcon=styled('img')``
const XcnPrice=styled('span')`
  ${TEXT_16_700}
  color: var(--text);
`
const Total=styled('div')`
   ${ROW_ALIGN_START__SPACE_B}
   margin-top: auto; 
   margin-bottom: 33px;
`
const TotalPrice=styled('p')`
  ${TEXT_14_700}
  color:var(--text)
`
const RightSideTotal=styled('div')`
   ${COLUMN_ALIGN_END__JUSTIFY_END}
`
const TotalXcnPrice=styled('span')``
const PrimaryButtons=styled(PrimaryButton)`
  width:100%;
  margin-top: 33px;
`
const ListItems=styled('div')`
flex:1;
overflow-y: auto;
`