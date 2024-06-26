import React, { useState } from "react";
import styled from "styled-components";
import {  ROW_ALIGN_CENTER__SPACE_B} from "styles/globalStyles";
import { mediaQueries } from "styles/mediaQueries";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "app/components/button/primaryButton";
import { IMAGES } from "assets/react_asset_gen";
import { SecondaryButton } from "app/components/button/secondaryButton";
import SearchInput from "app/components/input/primary";
import { Modal } from "app/components/modal";
import { ProfileModal } from "app/containers/ProfileModal";
import { CartModal } from "app/containers/CartModal";

interface HeaderProps {
  open: boolean;
}

export const Header: React.FC<HeaderProps> = ({ open }) => {
  const navigate = useNavigate();
  const [search, setSearch ]= useState("");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsProfileModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsProfileModalOpen(false);
  };
  const handle = (e: any) => {
    setSearch(e.target.value);
  };


  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
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
        <SearchInput 
        placeholder="Search"  
        value={search} onChange={handle}       
        />
        <Icons>
          <SecondaryButton icon={IMAGES.cart}  onClick={handleOpenCartModal}/>
          <SecondaryButton icon={IMAGES.person}  onClick={handleOpenModal}/>
        </Icons>
        <PrimaryButtons play>let's play</PrimaryButtons>
      </RightSideWrapper>
      <ModalStyle
        open={isProfileModalOpen}
        onClose={handleCloseModal}
        title=" "
      >
        <ProfileModal handleCloseModal={handleCloseModal}/>
      </ModalStyle>
      <ModalStyle
        open={isCartModalOpen}
        onClose={handleCloseCartModal}
        title="Your Cart"
      >
        <CartModal/>
      </ModalStyle>
    </HeaderWrapper>
  );
};


const ModalStyle=styled(Modal)`
  .MuiDialog-paper {
  border-radius: 24px 0px 0px 24px !important;  
  width: 360px !important;
  max-width: 1000px;
  position: absolute;
  right: 0;
  top: 64px;
  height: 940px;
  border: 1px solid var(--primary);
  box-shadow: -8px 8px 24px 0px rgba(36, 0, 70, 0.24);
  margin-right: 0;
}
`
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
