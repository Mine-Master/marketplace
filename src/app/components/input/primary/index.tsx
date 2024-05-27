import * as React from "react";
import BaseInput, { BaseInputProps } from "../baseInput/index";
import styled from "styled-components";

const SearchInput: React.FC<BaseInputProps > = ({
  ...props
}) => {
  return (
    <StyledSearchInput
      {...props}
    />
  );
};

export default SearchInput;

const StyledSearchInput = styled(BaseInput)`
.MuiOutlinedInput-root {
  font-size: 16px !important;
  border-radius: 16px !important;
  border: 1px solid 
  ${(props)=>(props.customStyle?'rgba(90, 24, 154, 1)': 'none')} !important;
  height: 48px;
  width: 370px;
  color: ${(props) => (props.customStyle ? "#5a189a" : "#fef7ff")} !important;
  background: ${(props) =>
      props.customStyle ? "#070012cc" : "linear-gradient(94.91deg, rgba(36, 0, 70, 0.3) 0.42%, rgba(90, 24, 154, 0.3) 96.13%)"} !important;
    .label{
      color: #fef7ff !important;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      box-shadow: 2px 2px 16.1px 0px #5a189a80;
      border: 1px solid #fef7ff0d;
      color: ${(props) => (props.customStyle ? "#5a189a" : "#fef7ff")} !important;
      }
      &:hover .MuiOutlinedInput-notchedOutline{
        border: 1px solid  rgba(254, 247, 255, 0.05);
        color: ${(props) => (props.customStyle ? "#5a189a" : "#fef7ff")} !important;
      }
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input  {
      color: #fef7ff !important;
    }
`;
