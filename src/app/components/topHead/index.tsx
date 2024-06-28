import React, { FC, useState } from 'react';
import { SecondaryButton } from 'app/components/button/secondaryButton';
import DropdownInput from 'app/components/input/dropDown';
import SearchInput from 'app/components/input/primary';
import { IMAGES } from 'assets/react_asset_gen';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { COLUMN_ALIGN_END__JUSTIFY_END, COLUMN_ALIGN_START__JUSTIFY_CENTER, COLUMN_ALIGN_START__JUSTIFY_START, ROW_ALIGN_CENTER__SPACE_B, ROW_ALIGN_END__JUSTIFY_END, ROW_ALIGN_START__SPACE_B, ROW_JUSTIFY_END__ALIGN_CENTER, ROW_JUSTIFY_START__ALIGN_CENTER } from 'styles/globalStyles';
import { TEXT_12_700, TEXT_16_500, TEXT_16_700, TEXT_24_700 } from 'styles/global-typography';

interface Option {
    label: string;
    value: string;
  }
  
  interface PriceInfo {
    num: string;
    subNum: string;
  }
  
  interface TopHeadProps {
    title: string;
    subtitle: string;
    prices: PriceInfo[];
    starText: string;
    iconSrc: string;
  }
  
  const options: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  
const TopHead: FC<TopHeadProps> = ({ title, subtitle, prices, starText,iconSrc }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value as string);
  };

  const handleFilterClick = (filter: string) => {
    console.log(filter);
  };

  const handleClearAll = () => {
    console.log('Clear all filters');
  };

  return (
    <Container>
      <SecondaryButton icon={IMAGES.backarrow} onClick={() => navigate(-1)}>Back</SecondaryButton>
      <Wrapper>
        <LeftSideWrapper>
          <TopIcon src={iconSrc} alt="top Icon" />
          <TopDesc>
            <TopTitle>{title}</TopTitle>
            <TopSubTitle>{subtitle}</TopSubTitle>
          </TopDesc>
        </LeftSideWrapper>
        <RightSideWrapper>
          <Prices>
            {prices.map((price, index) => (
              <Price key={index}>
                <Num>{price.num}</Num>
                <SubNum>{price.subNum}</SubNum>
              </Price>
            ))}
            <SecondaryButton icon={IMAGES.star}>{starText}</SecondaryButton>
          </Prices>
          <SearchAndSort>
            <SearchInput customStyle placeholder="Search" />
            <DropdownInput
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="Select an option"
            />
          </SearchAndSort>
        </RightSideWrapper>
      </Wrapper>
      <FilterSection>
        <FilterTitle>Filter by</FilterTitle>
        <FilterButtons>
          <SecondaryButtons onClick={handleClearAll}>Clear All</SecondaryButtons>
          {['1:3 APS = Attack speed', '2:3 APS < Attack speed', '3:100 HP = Health', '4:100 HP < Health', '5:100 DMG = Power', '6:100 DMG > Power'].map((filter, index) => (
            <SecondaryButton key={index} onClick={() => handleFilterClick(filter)}>
              {filter}
            </SecondaryButton>
          ))}
        </FilterButtons>
      </FilterSection>
    </Container>
  );
};

export default TopHead;


const Container=styled('div')`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:44px;
`

const Wrapper=styled('div')`
  width: 100%;
  ${ROW_ALIGN_START__SPACE_B}
`

const LeftSideWrapper=styled('div')`
   ${ROW_JUSTIFY_START__ALIGN_CENTER}
   gap:24px;
   margin: auto 0;
`

const TopIcon=styled('img')``

const TopDesc=styled('div')`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:8px;
`

const TopTitle=styled('h1')`
  ${TEXT_24_700}
  color: var(--text);
  margin:0;
`

const TopSubTitle=styled('p')`
   color: rgba(254, 247, 255, 0.7);
   ${TEXT_16_500}
   margin:0;
`

const RightSideWrapper=styled('div')`
  ${COLUMN_ALIGN_END__JUSTIFY_END}
  gap:24px;
`

const Prices=styled('div')`
   ${ROW_JUSTIFY_END__ALIGN_CENTER}
   gap:16px;
`

const Price=styled('div')`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
`

const Num=styled('p')`
   ${TEXT_16_700}
   color:var(--text);
   margin:0;
`

const SubNum=styled('span')`
  color: rgba(199, 125, 255, 1);
  ${TEXT_12_700}
`

const SearchAndSort=styled('div')`
  ${ROW_ALIGN_END__JUSTIFY_END}
  gap:24px;
`

const FilterSection=styled('div')`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
`

const FilterTitle=styled('h1')`
  ${TEXT_16_700}
  color: var(--text);
`

const FilterButtons=styled('div')`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
  gap:16px;
`
const SecondaryButtons=styled(SecondaryButton)`
  background: rgba(7, 0, 18, 0.8) !important;
`