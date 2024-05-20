import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ROW_CENTER } from "styles/globalStyles";
import { TEXT_14_700 } from "styles/global-typography";
import { mediaQueries } from "styles/mediaQueries";
import { BaseButton } from "../base";
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

interface PrimaryButtonProps {
  loading?: boolean;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  icon?: string;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  loading,
  disabled,
  success,
  error,
  icon,
  iconPosition = "start",
  children,
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
    disabled
      ? buttonTextColor.disabled
      : success
        ? buttonTextColor.success
        : buttonTextColor.default;

  return (
    <StyledPrimaryButton
      disabled={disabled}
      success={success}
      error={error}
      hasContent={Boolean(icon || children)}
      onClick={() => {}}
      {...props}
    >
      {iconPosition === "start" && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="left" />
      )}
      <ButtonText textColor={getButtonTextColor()}>{children}</ButtonText>
      {iconPosition === "end" && (
        <StyledIcon src={getButtonIcon()} alt="button icon" position="right" />
      )}
    </StyledPrimaryButton>
  );
};

const StyledPrimaryButton = styled(BaseButton)<{
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hasContent?: boolean;
}>`
  ${ROW_CENTER}
  font-family: "Ubuntu", sans-serif;
  height: 48px;
  min-width: 48px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px -4px 8px 0px rgba(36, 0, 70, 0.34) inset;
  background: ${(props) =>
    props.success || props.disabled
      ? "rgba(254, 247, 255, 0.05)"
      : props.error
        ? "#9a183f"
        : "linear-gradient(to right, #5a189a 0%, #9d4edd 100%)"};
  color: #fef7ff;
  gap: ${(props) => (props.hasContent ? "8px" : "0")};
  ${mediaQueries.lessThan("xs")`
    height: 45px;
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
