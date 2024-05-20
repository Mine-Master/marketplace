import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

export interface BaseButtonProps extends ButtonProps {}
export const BaseButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return <BaseButtonStyled {...props}>{children}</BaseButtonStyled>;
};

export const BaseButtonStyled = styled(Button)<BaseButtonProps>`
  font-family: "Ubuntu", sans-serif;
  text-transform: capitalize;
`;
