
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TEXT_14_700 } from "styles/global-typography";
import { ROW_CENTER } from "styles/globalStyles";
import { BaseButton } from "../base";
import { IMAGES } from "assets/react_asset_gen";

interface SecondaryButtonProps {
  loading?: boolean;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  icon?: string;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  loading,
  disabled,
  success,
  error,
  icon,
  iconPosition = "start",
  children,
  ...props
}: SecondaryButtonProps) => {
  const handleButtonClick = () => {};

  return (
    <StyledSecondaryButton
      loading={loading}
      disabled={disabled}
      success={success}
      error={error}
      onClick={handleButtonClick}
      hasChildren={!!children}
      {...props}
    >
      {loading && (
        <StyledIcon
          src={IMAGES.loading}
          alt="loading icon"
          position="start"
          hasChildren={!!children}
        />
      )}
      {!loading && icon && iconPosition === "start" && (
        <StyledIcon
          src={icon}
          alt="button icon"
          position="start"
          hasChildren={!!children}
        />
      )}
      {children && (
        <ButtonText textColor={getTextColor(disabled, success)}>
          {children}
        </ButtonText>
      )}
      {!loading && icon && iconPosition === "end" && (
        <StyledIcon
          src={icon}
          alt="button icon"
          position="end"
          hasChildren={!!children}
        />
      )}
    </StyledSecondaryButton>
  );
};

const StyledSecondaryButton = styled(BaseButton, {
  shouldForwardProp: (prop) => !['success', 'error', 'hasChildren','loading'].includes(prop),
})<{
  loading?: boolean;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hasChildren: boolean;
}>`
  ${ROW_CENTER}
  font-family: "Ubuntu", sans-serif;
  height: 48px;
  min-width: 48px;
  padding: 8px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px -4px 8px 0px rgba(36, 0, 70, 0.34) inset;
  background-color: rgba(254, 247, 255, 0.05);
  color: ${(props) => getTextColor(props.disabled, props.success)};
  border: 1px solid transparent;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: ${(props) => (props.hasChildren ? 'space-between' : 'center')};
  align-items: center;

  &:hover {
    background-color: #240046;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #9a183f;
    `}
`;

const ButtonText = styled.span<{ textColor: string }>`
  ${TEXT_14_700}
  font-family: "Ubuntu", sans-serif;
  color: ${(props) => props.textColor};
`;

const StyledIcon = styled("img")<{
  position: "start" | "end";
  hasChildren: boolean;
}>`
  width: 24px;
  height: 24px;
  margin-right: ${(props) => (props.position === "start" && props.hasChildren ? "4px" : "0")};
  margin-left: ${(props) => (props.position === "end" && props.hasChildren ? "4px" : "0")};
`;

const getTextColor = (disabled?: boolean, success?: boolean) => {
  if (disabled) return "#FEF7FFB2";
  if (success) return "#C77DFF";
  return "inherit";
};
