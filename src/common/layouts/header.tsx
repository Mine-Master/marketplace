import React, { useState } from "react";
import styled from "styled-components";
import { COLUMN_JUSTIFY_START__ALIGN_CENTER, ROW_ALIGN_CENTER__SPACE_B, ROW_ALIGN_START__JUSTIFY_CENTER, ROW_ALIGN_START__JUSTIFY_START, ROW_JUSTIFY_CENTER__ALIGN_CENTER, ROW_JUSTIFY_START__ALIGN_CENTER } from "styles/globalStyles";
import { mediaQueries } from "styles/mediaQueries";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "app/components/button/primaryButton";
import { IMAGES } from "assets/react_asset_gen";
import { SecondaryButton } from "app/components/button/secondaryButton";
import SearchInput from "app/components/input/primary";
import { Modal } from "app/components/modal";
import profileImage from 'assets/c6c96a4ec39c33d32fc11058a6c5c4e7.png'
import { TEXT_16_700, TEXT_24_700 } from "styles/global-typography";
import { Box } from "@mui/material";

const items = [
  { icon: IMAGES.person, name: 'Profile' },
  { icon: IMAGES.Notifications, name: 'Notifications' },
  { icon: IMAGES.Favorited, name: 'Favorited' },
  { icon: IMAGES.Setting, name: 'Setting' },
  { icon: IMAGES.Languages, name: 'Languages' },
  { icon: IMAGES.Help, name: 'Help' },
  { icon: IMAGES.Learn, name: 'Learn' },
];
interface HeaderProps {
  open: boolean;
}

export const Header: React.FC<HeaderProps> = ({ open }) => {
  const navigate = useNavigate();
  const [search, setSearch ]= useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
        <SearchInput 
        placeholder="Search"  
        value={search} onChange={handle}       
        />
        <Icons>
          <SecondaryButton icon={IMAGES.cart} />
          <SecondaryButton icon={IMAGES.person} onClick={handleOpenModal}/>
        </Icons>
        <PrimaryButtons>let's play</PrimaryButtons>
      </RightSideWrapper>
      <ModalStyle
        open={isModalOpen}
        onClose={handleCloseModal}
        title=" "
      >
        <ModalContainer>
          <AdminProfile>
            <ProfileImage src={profileImage} alt='Profile Image'/>
            <NameLink>
              <ProfileName>mamad sokhangoo</ProfileName>
              <ConnectIcons>
                <ConnectIcon src={IMAGES.youtube} alt='youtube'/>
                <ConnectIcon src={IMAGES.discord} alt='discord'/>
              </ConnectIcons>
            </NameLink>
          </AdminProfile>
          <ConnectWallet/>
          <ProfilesTab>
          {items.map((item, index) => (
              <Items key={index} display="flex" alignItems="center" gap={2}>
                <ConnectIcon src={item.icon} />
                <ItemsName>{item.name}</ItemsName>
              </Items>
            ))}
          </ProfilesTab>
        </ModalContainer>
      </ModalStyle>
    </HeaderWrapper>
  );
};
const ModalContainer=styled('div')`
   /* padding:90px 32px 189px 32px; */
`
const AdminProfile=styled('div')`
  ${ROW_JUSTIFY_CENTER__ALIGN_CENTER}
  gap:24px;
`
const ProfileImage=styled('img')`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  border:3px solid rgba(90, 24, 154, 0.5);
`
const NameLink=styled('div')``
const ProfileName=styled('h1')`
   color:#C77DFF;
   margin: 0;
   ${TEXT_24_700}
`
const ConnectIcons=styled('div')`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
  gap:8px;
`
const ConnectIcon=styled('img')``
const ConnectWallet=styled('div')``
const ProfilesTab=styled(Box)`
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
`
const Items=styled(Box)`
   ${ROW_ALIGN_START__JUSTIFY_START}
   gap:8px;
   width: 100%;
   margin:0 8px;
   padding:16px 8px 16px 8px;
   border-bottom: 1px solid rgba(90, 24, 154, 0.5);
`
const ItemsName=styled('span')`
  ${TEXT_16_700}
  color:var(--text);
 `
const ModalStyle=styled(Modal)`
.MuiDialog-paper {
border-radius: 24px 0px 0px 24px !important;  
width: 360px !important;
max-width: 1000px;
position: absolute;
right: 0;
/* top: 24px; */
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
