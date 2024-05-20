import * as React from "react";
import { IMAGES } from "assets/react_asset_gen";
import styled, { css } from "styled-components";
import { InputAdornment } from "@mui/material";
import BaseInput from "../baseInput";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  startDecorator?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  customStyle?: boolean;
}

const SecondaryInput: React.FC<SearchInputProps> = ({
  placeholder = "Search…",
  onChange,
  value = "",
  disabled = false,
  error = false,
  startDecorator = <img src={IMAGES.secondarySearchIcon} alt="search icon" />,
  customStyle = false,
  ...props
}) => {
  const getInputStartDecorator = () => {
    if (error)
      return <img src={IMAGES.SearchIconError} alt="search icon error" />;
    if (disabled)
      return (
        <img
          src={IMAGES.disabledSearchSecondaryIcon}
          alt="disabled search icon"
        />
      );
    return <img src={IMAGES.secondarySearchIcon} alt="search icon" />;
  };
  const handleClearClick = () => {
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <StyledBaseInput
      placeholder={placeholder}
      startDecorator={getInputStartDecorator()}
      endDecorator={
        <InputAdornment position="end">
          {value && (
            <ClearIcon onClick={handleClearClick}>
              <img
                src={error ? IMAGES.TimesError : IMAGES.secondaryTimes}
                alt={error ? "error clear icon" : "times icon"}
              />
            </ClearIcon>
          )}
          {customStyle && (
            <XCNNumber error={error} disabled={disabled}>
              00.00 XCN
            </XCNNumber>
          )}
        </InputAdornment>
      }
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      customStyle={customStyle}
      sx={{
        "--Input-placeholderOpacity": 1,
        "--Input-focusedThickness": "0px",
      }}
      variant="solid"
      {...props}
    />
  );
};

export default SecondaryInput;

const StyledBaseInput = styled(BaseInput)<{
  error: boolean;
  disabled: boolean;
  customStyle: boolean;
}>`
  font-size: 15px !important;
  font-weight: 500;
  line-height: 24px;
  font-family: "Ubuntu", sans-serif;
  border: 1px solid
    ${(props) =>
      props.error
        ? "#9A183F"
        : props.disabled
          ? "rgba(254, 247, 255, 0.2)"
          : "#5a189a"};
  border-radius: 16px !important;
  height: ${(props) => (props.customStyle ? "58px" : "48px")};
  width: ${(props) => (props.customStyle ? "528px" : "370px")};

  color: ${(props) =>
    props.error
      ? "#9A183F"
      : props.disabled
        ? "#070012CC"
        : "#5a189a"} !important;
  background: ${(props) =>
    props.disabled ? "#070012CC" : "#070012cc"} !important;
  ${(props) =>
    props.customStyle &&
    css`
      font-size: 24px;
      font-weight: 500;
      line-height: 33.6px;
      text-align: left;
    `}
  &.Mui-focused {
    --Input-placeholderOpacity: 0;
    box-shadow: 2px 2px 16.1px 0px
      ${(props) =>
        props.disabled ? "#5a189a80" : props.error ? "#9A183F80" : "#5a189a80"};
  }
`;

const ClearIcon = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const XCNNumber = styled.div<{ error: boolean; disabled: boolean }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.09px;
  text-align: left;
  color: ${(props) =>
    props.error
      ? "#9A183F"
      : props.disabled
        ? "rgba(254, 247, 255, 0.2)"
        : "#5a189a"};
  border-left: 2px solid
    ${(props) =>
      props.error
        ? "#9A183F"
        : props.disabled
          ? "rgba(254, 247, 255, 0.2)"
          : "#5a189a"};

  padding-left: 8px;
  margin-left: 8px;
`;
