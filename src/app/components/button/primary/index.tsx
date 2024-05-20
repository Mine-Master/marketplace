import styled from "@emotion/styled";
import { FC } from "react";
import { BaseButtonProps, BaseButton } from "../base";
import { ROW_ALIGN_CENTER__SPACE_B, ROW_CENTER } from "styles/globalStyles";
import { TEXT_14_700 } from "styles/global-typography";
import { css } from "@emotion/react";
import { mediaQueries } from "styles/mediaQueries";

export interface PrimaryProps extends BaseButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

export const PrimaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
};

export const PrimaryButtonStyled = styled(BaseButton)<PrimaryProps>`
  ${TEXT_14_700}
  ${ROW_ALIGN_CENTER__SPACE_B};
  font-family: "Ubuntu", sans-serif;
  gap: 16px;
  width: 136px;
  height: 48px;

  /* Elevation - Primary BTN */
  box-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  background-color: var(--button);
  color: var(--button-text);
  border-radius: 16px;
  border: 2.5px solid var(--Primary);
  &:hover {
    color: var(--Whitish);
    /* Gradient/2 color */
    background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
    /* Inner-shadow - Hover Primary BTN */
    box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  }
  // style when loading props is true
  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      color: var(--Whitish);
      ${ROW_CENTER}
      ${mediaQueries.lessThan("xs")`
      padding: 8px 12px 8px 8px;
      height: 40px;
      `}
    `}

  // style disabled
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: rgba(90, 24, 154, 0.1);
      img {
        opacity: 50%;
      }
      color: rgba(90, 24, 154, 0.5);
      border: none;
      box-shadow: none;
    `}
    ${mediaQueries.lessThan("xs")`
    height: 40px;
    `}
`;
