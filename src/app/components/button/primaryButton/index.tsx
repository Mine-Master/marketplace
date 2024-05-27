import styled from "@emotion/styled";
import { mediaQueries } from "styles/mediaQueries";
import { BaseButton, BaseButtonProps } from "../base";

export const PrimaryButton: React.FC<BaseButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledPrimaryButton {...props}>
      {children}
    </StyledPrimaryButton>
  );
};

const StyledPrimaryButton = styled(BaseButton)<{ success?: boolean; error?: boolean }>`
  background: ${(props) =>
    props.success || props.disabled
      ? "rgba(254, 247, 255, 0.05)"
      : props.error
      ? "#9a183f"
      : "linear-gradient(to right, #5a189a 0%, #9d4edd 100%)"};
  color: #fef7ff;
  ${mediaQueries.lessThan("xs")`
    height: 45px;
  `}
`;
