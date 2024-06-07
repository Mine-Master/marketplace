import { Box } from '@mui/material'
import { IMAGES } from 'assets/react_asset_gen'
import React from 'react'
import styled from 'styled-components'
import { TEXT_16_700, TEXT_24_700 } from 'styles/global-typography'
import profileImage from 'assets/c6c96a4ec39c33d32fc11058a6c5c4e7.png'
import { COLUMN_JUSTIFY_START__ALIGN_CENTER, ROW_ALIGN_START__JUSTIFY_START, ROW_JUSTIFY_START__ALIGN_CENTER } from 'styles/globalStyles'
import ConnectButton from 'app/components/button/connect-button'

const items = [
    { icon: IMAGES.person, name: 'Profile' },
    { icon: IMAGES.Notifications, name: 'Notifications' },
    { icon: IMAGES.Favorited, name: 'Favorited' },
    { icon: IMAGES.Setting, name: 'Setting' },
    { icon: IMAGES.Languages, name: 'Languages' },
    { icon: IMAGES.Help, name: 'Help' },
    { icon: IMAGES.Learn, name: 'Learn' },
  ];

  interface ProfileModalProps {
    handleCloseModal: () => void;
  }

export const ProfileModal: React.FC<ProfileModalProps>  = ({handleCloseModal}) => {
  return (
    <ModalContainer>
    <AdminProfile>
      <ProfileImage src={profileImage} alt='Profile Image'/>
      <NameLink>
        <ProfileName> sokhangoo</ProfileName>
        <ConnectIcons>
          <ConnectIcon src={IMAGES.youtube} alt='youtube'/>
          <ConnectIcon src={IMAGES.discord} alt='discord'/>
        </ConnectIcons>
      </NameLink>
    </AdminProfile>
    <ConnectButtonStyles onClick={handleCloseModal}>
       <ConnectButton/>
    </ConnectButtonStyles>
    <ProfilesTab>
    {items.map((item, index) => (
        <Items key={index} display="flex" alignItems="center" gap={2}>
          <ConnectIcon src={item.icon} />
          <ItemsName>{item.name}</ItemsName>
        </Items>
      ))}
    </ProfilesTab>
  </ModalContainer>
  )
}


const ConnectButtonStyles=styled('div')`
   margin:8px 0;
`
const ModalContainer=styled('div')``
const AdminProfile=styled('div')`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
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

const ProfilesTab=styled(Box)`
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
`
const Items=styled(Box)`
   ${ROW_ALIGN_START__JUSTIFY_START}
   gap:8px;
   width: 100%;
   margin:0 8px;
   cursor: pointer;
   padding:16px 8px 16px 8px;
   border-bottom: 1px solid rgba(90, 24, 154, 0.5);
   &:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
`
const ItemsName=styled('span')`
  ${TEXT_16_700}
  color:var(--text);
 `