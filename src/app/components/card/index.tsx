import { IMAGES } from "assets/react_asset_gen";
import styled from "styled-components";
import { TEXT_12_700, TEXT_16_500 } from "styles/global-typography";
import { COLUMN_ALIGN_CENTER__SPACE_B, ROW_ALIGN_CENTER__SPACE_B, ROW_JUSTIFY_CENTER__ALIGN_CENTER } from "styles/globalStyles";

interface CardProps {
    iconSrc: string;
    landNum: string;
    usdPrice: string;
    xcnPrice: string;
  }
  
  export const Card: React.FC<CardProps> = ({ iconSrc, landNum, usdPrice, xcnPrice }) => {
    const priceIconSrc = `${IMAGES.priceiconxcn}`;
    return (
    <CardWrapper>
      <IconStyle src={iconSrc} alt='lands' />
      <LandNum>{landNum}</LandNum>
      <DescCart>
        <UsdPrice>{usdPrice}</UsdPrice>
        <XcnPrice>
          {xcnPrice}
          <PriceIcon src={priceIconSrc} alt="Price Icon" />
        </XcnPrice>
      </DescCart>
    </CardWrapper>
    )
};


const CardWrapper = styled.div`
    width: calc(12.5% - 10px); 
    height: 210px;
    margin: 5px;
    border: 1px solid rgba(90, 24, 154, 0.1);
    border-radius: 16px;
    ${COLUMN_ALIGN_CENTER__SPACE_B}
    text-align: center;
    background:  rgba(90, 24, 154, 0.1);
`;

const IconStyle = styled.img`
width: 130px;
height: 130px;
`;

const LandNum = styled.h3`
  color:var(--text);
  ${TEXT_16_500}
  text-align: left !important;
  margin: 0 0 10px; 
  align-self: start;
  padding-left: 10px;
`;

const DescCart = styled.div`
   ${ROW_ALIGN_CENTER__SPACE_B}
   gap: 20px;
   width: 100%;
   padding: 0 8px;
   border-top: 1px solid  rgba(90, 24, 154, 0.1);
`;

const UsdPrice = styled.p`
    color:  rgba(254, 247, 255, 0.7);
    ${TEXT_12_700}
    white-space: nowrap;
`;

const XcnPrice = styled.div`
    ${ROW_JUSTIFY_CENTER__ALIGN_CENTER}
    color:  rgba(254, 247, 255, 0.7);
    ${TEXT_12_700}
    border:none;
`;

const PriceIcon = styled.img`
  width: 24px;
  height: 24px;
`;
