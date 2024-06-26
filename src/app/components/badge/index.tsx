import styled from "styled-components";
import { TEXT_12_700, TEXT_24_700 } from "styles/global-typography";
import { COLUMN_ALIGN_START__JUSTIFY_START, ROW_JUSTIFY_CENTER__ALIGN_CENTER } from "styles/globalStyles";

interface BadgeProps {
    icon: string;
    title: string;
    subtitle: string;
  }

export const BadgeComponent: React.FC<BadgeProps> = ({ icon, title, subtitle }) => (
    <Badge>
      <IconStyle src={icon} alt={title} />
      <BadgeText>
        <BadgeTitle>{title}</BadgeTitle>
        <BadgeSubTitle>{subtitle}</BadgeSubTitle>
      </BadgeText>
    </Badge>
  );
  
const Badge=styled.div`
width: fit-content;
height: 98px;
${ROW_JUSTIFY_CENTER__ALIGN_CENTER}
gap:8px;
padding:24px;
background: linear-gradient(94.91deg, rgba(90, 24, 154, 0.1) 0.42%, rgba(199, 125, 255, 0.1) 96.13%);
border: 1px solid  #5A189A80;
border-radius: 16px;
`
const IconStyle=styled.img``
const BadgeText=styled.div`
${COLUMN_ALIGN_START__JUSTIFY_START}
margin:0 auto;
`
const BadgeTitle=styled.h1`
${TEXT_24_700}
color: var(--text);
margin:0;
`
const BadgeSubTitle=styled.p`
color: #C77DFF;
${TEXT_12_700}
line-height: 13.79px;
margin:0;
`