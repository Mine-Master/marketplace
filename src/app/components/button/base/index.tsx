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

export const buttonTextColor = {
  disabled: "rgba(60, 9, 108, 1)",
  success: "linear-gradient(94.91deg, #5A189A 0.42%, #C77DFF 96.13%)",
  default: "var(--text)",
  secondaryDisabled: "rgba(254, 247, 255, 0.7)",
  secondarySuccess: "#C77DFF",
  secondaryDefault: "var(--text)",
};

const buttonBackground = {
  default: "linear-gradient(to right, #5a189a 0%, #9d4edd 100%)",
  loading: "rgba(254, 247, 255, 0.05)",
  success: "rgba(254, 247, 255, 0.05)",
  error: "#9a183f",
  disabled: "rgba(254, 247, 255, 0.05)"
};

export interface BaseButtonProps extends ButtonProps {
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  icon?: string;
  iconPosition?: "start" | "end";
  onClick?: () => void;
  textColor?: string;
  play?: boolean;
  children?: React.ReactNode;
  secondary?: boolean; 
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
  play,
  secondary,
  ...props
}) => {
  const getButtonIcon = (): string | undefined => {
    if (loading) return buttonStates.loading;
    if (!icon && !play) return undefined;
    if (secondary && loading) return buttonStates.loading;
    return icon || buttonStates[
      loading ? "loading" : disabled ? "disabled" : success ? "success" : error ? "error" : "default"
    ];
  };

  const getButtonTextColor = () => {
    if (secondary) {
      if (disabled) return buttonTextColor.secondaryDisabled;
      if (success) return buttonTextColor.secondarySuccess;
      return buttonTextColor.secondaryDefault;
    }
    return textColor || (disabled ? buttonTextColor.disabled : success ? buttonTextColor.success : buttonTextColor.default);
  };

  const getButtonBackground = () => {
    if (secondary) return "rgba(254, 247, 255, 0.05)";
    if (play) {
      return buttonBackground[
        loading ? "loading" : disabled ? "disabled" : success ? "success" : error ? "error" : "default"
      ];
    }
    return buttonBackground[
      loading ? "loading" : disabled ? "disabled" : success ? "success" : error ? "error" : "default"
    ];
  }
  return (
    <BaseButtonStyled
      hasContent={Boolean(children)}
      disabled={disabled}
      onClick={onClick}
      buttonBackground={getButtonBackground()}
      secondary={secondary}
      error={error}
      {...props}
    >
      {iconPosition === "start" && getButtonIcon() && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="left" />
      )}
      <ButtonText textColor={getButtonTextColor()}>{children}</ButtonText>
      {iconPosition === "end" && getButtonIcon() && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="right" />
      )}
    </BaseButtonStyled>
  );
};

const BaseButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => !['hasContent', 'success', 'error', 'play', 'buttonBackground', 'secondary'].includes(prop),
})<{ hasContent: boolean; success?: boolean; error?: boolean; play?: boolean; buttonBackground: string; secondary?: boolean }>`
  ${ROW_CENTER}
  font-family: "Ubuntu", sans-serif;
  text-transform: capitalize;
  height: 48px;
  min-width: 48px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px -4px 8px 0px rgba(36, 0, 70, 0.34) inset;
  gap: ${(props) => (props.hasContent ? "8px" : "0")};
  background: ${(props) => props.buttonBackground};
  ${props =>
    props.error && !props.secondary &&
    css`
      border: 1px solid var(--error);
    `}
  ${props =>
    props.secondary &&
    css`
      border: 1px solid transparent;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #240046;
      }
      ${props.error && css`
        border: 1px solid var(--error);
      `}
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
