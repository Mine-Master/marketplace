import * as React from "react";
import styled from "@emotion/styled";
import BaseInput, { BaseInputProps } from "../baseInput";
import { IMAGES } from "assets/react_asset_gen";

interface SecondaryInputProps extends BaseInputProps {}

const SecondaryInput: React.FC<SecondaryInputProps> = ({...props}) => {
  
  const handleClearClick = () => {
    if (props.onChange) {
      props.onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };
  const mergedEndAdornment = (
    <>
      {props.InputProps?.endAdornment}
      <ClearIcon onClick={handleClearClick} style={{visibility :props.value ?"visible" : "hidden"}}>
        <img src={props.error ? IMAGES.TimesError : IMAGES.secondaryTimes} alt="clear icon" />
      </ClearIcon>
      <XCNNumber error={!!props.error} disabled={!!props.disabled}>
        00.00 XCN
      </XCNNumber>
    </>
  );
  const inputProps = {
    ...props.InputProps,
    endAdornment: mergedEndAdornment,
  };
  
  
  return (
    <SecondaryInputContainer error={!!props.error} disabled={!!props.disabled}>
    <BaseInput {...props} customStyle={true} InputProps={inputProps} isSecondary={true}/>
  </SecondaryInputContainer>
  );
};

export default SecondaryInput;

const SecondaryInputContainer = styled.div<{ error: boolean; disabled: boolean }>`
  .MuiOutlinedInput-root {
    font-size: 16px !important;
    font-weight: 500;
    line-height: 24px;
    font-family: "Ubuntu", sans-serif;
    border: 1px solid
      ${(props) => (props.error ? "#9A183F" : props.disabled ? "rgba(254, 247, 255, 0.2)" : "#5a189a")};
    border-radius: 16px !important;
    height: 58px;
    width: 528px;
    color: ${(props) => (props.error ? "#9A183F" : props.disabled ? "#070012CC" : "#5a189a")} !important;
    background: ${(props) => (props.disabled ? "#070012CC" : "#070012cc")} !important;
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid  ${(props)=>props.error? '#9A183F':'#5A189A'} !important;
    }
    &.Mui-focused {
      --Input-placeholderOpacity: 0;
      box-shadow: 2px 2px 16.1px 0px
        ${(props) =>
          props.disabled ? "#5a189a80" : props.error ? "#9A183F80" : "#5a189a80"};
    }
  }
`;

const XCNNumber = styled.div<{ error: boolean; disabled: boolean }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.09px;
  text-align: left;
  color: ${(props) =>
    props.error ? "#9A183F" : props.disabled ? "rgba(254, 247, 255, 0.2)" : "#5a189a"};
  border-left: 2px solid
    ${(props) =>
      props.error ? "#9A183F" : props.disabled ? "rgba(254, 247, 255, 0.2)" : "#5a189a"};
  padding-left: 8px;
  margin-left: 8px;
  white-space: nowrap;
`;
const ClearIcon = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
