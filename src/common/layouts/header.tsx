import React, { useState } from "react";
import styled from "styled-components";
import { ROW_ALIGN_CENTER__SPACE_B } from "styles/globalStyles";
import { mediaQueries } from "styles/mediaQueries";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "app/components/button/primaryButton";
import { IMAGES } from "assets/react_asset_gen";
import { SecondaryButton } from "app/components/button/secondaryButton";
import SearchInput from "app/components/input/primary";
import SecondaryInput from "app/components/input/secondary";
import BaseDropdownInput from "app/components/input/dropDown";
import { Email, Label } from "@mui/icons-material";

interface HeaderProps {
  open: boolean;
}

export const Header: React.FC<HeaderProps> = ({ open }) => {
  const navigate = useNavigate();
  const [search, setSearch ]= useState("");
  const handle = (e: any) => {
    setSearch(e.target.value);
  };
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/`);
  };
  return (
    <HeaderWrapper>
      {!open && (
        <Name>
          <LogoStyle
            src={IMAGES.Logo_Header}
            alt="Logo"
            onClick={handleLogoClick}
          />
          <CompanyNameWrapper>
            <CompanyName>M</CompanyName>
            <BlueCharacter>I</BlueCharacter>
            <CompanyName>N</CompanyName>
            <OrangeCharacter>E</OrangeCharacter>
            &nbsp;
            <CompanyName>MASTERS</CompanyName>
          </CompanyNameWrapper>
        </Name>
      )}
      <RightSideWrapper>
        <BaseDropdownInput 
        // placeholder="Search"  
        // value={search} onChange={handle} 
        value={search}
        onChange={handle}
        options={[
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          
        ]}
        placeholder="Select an option"
        // helperText="This is a helper text"
        error={false}
        // label="Dropdown Label"
        // fullWidth
        isLoading={false}  
        />
        <Icons>
          <SecondaryButton icon={IMAGES.cart} />
          <SecondaryButton icon={IMAGES.person} />
        </Icons>
        <PrimaryButtons>let's play</PrimaryButtons>
      </RightSideWrapper>
    </HeaderWrapper>
  );
};

const Name = styled("div")`
  display: flex;
  padding: 0 10px;
  gap: 24px;
  align-items: center;
`;
const CompanyNameWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
const CompanyName = styled("p")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

const BlueCharacter = styled("h1")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: var(--Pastal-Blue);
  font-size: 24px;
  margin: 0;
`;

const OrangeCharacter = styled("h1")`
  font-family: "Big Shoulders Stencil Text", sans-serif;
  color: var(--orange);
  font-size: 24px;
  margin: 0;
`;

const LogoStyle = styled("img")`
  cursor: pointer;
  width: 24px;
  height: 26.67px;
`;
const HeaderWrapper = styled("div")`
  width: 100%;
  ${ROW_ALIGN_CENTER__SPACE_B}
`;
const RightSideWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  ${mediaQueries.lessThan("sm")`
    gap: 8px;
  `}
`;
const Icons = styled("div")`
  display: flex;
  gap: 16px;
  ${mediaQueries.lessThan("sm")`
    gap: 8px;
  `}
`;

const PrimaryButtons = styled(PrimaryButton)`
  width: 136px;
  min-width: 136px;
`;
