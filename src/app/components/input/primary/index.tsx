import * as React from "react";
import BaseInput from "../baseInput/index";
import { IMAGES } from "assets/react_asset_gen";
import styled from "styled-components";
import { InputAdornment } from "@mui/material";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  startDecorator?: React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search…",
  onChange,
  value = "",
  startDecorator = <img src={IMAGES.search} alt="search icon" />,
  disabled = false,
  ...props
}) => {
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
      startDecorator={startDecorator}
      endDecorator={
        <InputAdornment position="end">
          {value && (
            <ClearIcon onClick={handleClearClick}>
              <img src={IMAGES.times} alt="times icon" />
            </ClearIcon>
          )}
        </InputAdornment>
      }
      value={value}
      onChange={onChange}
      disabled={disabled}
      sx={{
        "--Input-placeholderOpacity": 1,
        "--Input-focusedThickness": "0px",
      }}
      variant="solid"
      {...props}
    />
  );
};

export default SearchInput;

const StyledBaseInput = styled(BaseInput)`
  font-size: 16px !important;
  border-radius: 16px !important;
  height: 48px;
  width: 370px;
  color: #fef7ff;
  background: linear-gradient(
    94.91deg,
    rgba(36, 0, 70, 0.3) 0.42%,
    rgba(90, 24, 154, 0.3) 96.13%
  ) !important;
  &.Mui-focused {
    --Input-placeholderOpacity: 0;
    box-shadow: 2px 2px 16.1px 0px #5a189a80;
    border: 1px solid #fef7ff0d;
    background: linear-gradient(
      94.91deg,
      rgba(36, 0, 70, 0.5),
      rgba(90, 24, 154, 0.5)
    ) !important;
  }
`;

const ClearIcon = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
