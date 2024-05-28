import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";
import { css } from "@emotion/react";
import { ROW_CENTER } from "styles/globalStyles";
import { TEXT_14_700 } from "styles/global-typography";
import { IMAGES } from "assets/react_asset_gen";

const buttonStates = {
  loading: IMAGES.loading,
  disabled: IMAGES.DisableSpace,
  success: IMAGES.successSpace,
  error: IMAGES.errorIcon,
  default: IMAGES.space,
};

const buttonTextColor = {
  disabled: "rgba(60, 9, 108, 1)",
  success: "linear-gradient(94.91deg, #5A189A 0.42%, #C77DFF 96.13%)",
  default: "inherit",
};

export interface BaseButtonProps extends ButtonProps {
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  icon?: string;
  iconPosition?: "start" | "end";
  onClick?: () => void;
  textColor?: string;
  children?: React.ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({
  loading,
  disabled,
  success,
  error,
  icon,
  iconPosition = "start",
  onClick,
  children,
  textColor,
  ...props
}) => {
  const getButtonIcon = () =>
    icon ||
    buttonStates[
      loading
        ? "loading"
        : disabled
        ? "disabled"
        : success
        ? "success"
        : error
        ? "error"
        : "default"
    ];

  const getButtonTextColor = () =>
    textColor ||
   ( disabled
      ? buttonTextColor.disabled
      : success
      ? buttonTextColor.success
      : buttonTextColor.default);

  return (
    <BaseButtonStyled hasContent={Boolean(children)} disabled={disabled} onClick={onClick} {...props}>
      {iconPosition === "start" && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="left" />
      )}
      <ButtonText textColor={getButtonTextColor()}>{children}</ButtonText>
      {iconPosition === "end" && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="right" />
      )}
    </BaseButtonStyled>
  );
};

const BaseButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => !['hasContent', 'success', 'error'].includes(prop),
})<{ hasContent: boolean; success?: boolean; error?: boolean }>`
  ${ROW_CENTER}
  font-family: "Ubuntu", sans-serif;
  text-transform: capitalize;
  height: 48px;
  min-width: 48px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px -4px 8px 0px rgba(36, 0, 70, 0.34) inset;
  gap: ${(props) => (props.hasContent ? "8px" : "0")};
  ${props =>
    props.error &&
    css`
      border: 1px solid var(--error);
    `}
`;
const ButtonText = styled.span<{ textColor: string }>`
  ${TEXT_14_700}
  font-family: "Ubuntu", sans-serif;
  ${(props) =>
    props.textColor.startsWith("linear-gradient")
      ? css`
          color: transparent;
          background-image: ${props.textColor};
          -webkit-background-clip: text;
          background-clip: text;
        `
      : css`
          color: ${props.textColor};
        `}
`;
const StyledIcon = styled.img<{ position: "left" | "right" }>`
  width: 24px;
  height: 24px;
  margin: 0 !important;
  margin: ${(props) => (props.position === "left" ? "0 4px 0 0" : "0 0 0 4px")};
`;
