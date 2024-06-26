import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BaseButton, BaseButtonProps } from "../base";

export const SecondaryButton: React.FC<BaseButtonProps> = ({
  children,
  success,
  disabled,
  ...props
}) => {
  const getTextColor = () => {
    if (disabled) return "rgba(254, 247, 255, 0.7)";
    if (success) return " #C77DFF";
    return "var(--text)";
  };
  
  return (
    <StyledSecondaryButton {...props} textColor={getTextColor()}>
      {children}
    </StyledSecondaryButton>
  );
};

const StyledSecondaryButton = styled(BaseButton)<{ success?: boolean; error?: boolean }>`
  background-color: rgba(254, 247, 255, 0.05);
  border: 1px solid transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #240046;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid var(--error);
    `}
`;

