
import { InputAdornment, TextField, styled } from "@mui/material";
import { IMAGES } from "assets/react_asset_gen";
import * as React from "react";
import { TEXT_12_700 } from "styles/global-typography";

export interface BaseInputProps  {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  customStyle?: boolean;
  InputProps?: any;
  isSecondary?: boolean;
  helperText?: string;
}
  const BaseInput: React.FC<BaseInputProps> = ({ value, onChange,placeholder,disabled,customStyle,error,InputProps,isSecondary,helperText,...props }) => {
    const handleClearClick = () => {
      if (onChange) {
        onChange({
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };
    const getInputStartDecorator = () => { 
      if (isSecondary&&disabled) {
        return <img src={IMAGES.disabledSearchSecondaryIcon} alt="disabled search icon" />;
      }
      if (isSecondary&&error) {
        return <img src={IMAGES.SearchIconError} alt="error search icon" />;
      }
      if (customStyle) {
        return <img src={IMAGES.secondarySearchIcon} alt="secondary search icon" />;
      }
      return <img src={IMAGES.search} alt="search icon" />;
    };
    const getClearIcon = () => {
      if (isSecondary&&error) {
        return <img src={IMAGES.TimesError} alt="error clear icon" />;
      }
      return <img src={customStyle ? IMAGES.secondaryTimes : IMAGES.times} alt="clear icon" />;
    };
  
  return (
    <>
      <Input
      {...props}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      sx={{color:"var(--text)"}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {getInputStartDecorator()}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <ClearIcon onClick={handleClearClick} sx={{visibility :value ?"visible" : "hidden"}}>
               {getClearIcon()}
            </ClearIcon>
            {InputProps?.endAdornment}
          </InputAdornment>
        ) , 
        ...InputProps,      
      }}
      />
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </>
  );
};

export default BaseInput;
const Input=styled(TextField)<{customStyle?:boolean}>`
.MuiOutlinedInput-input{
  &::placeholder{
   opacity: 1;
  }
} 
& :-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${(props)=>props.customStyle ? "#070012": "#1f0f39"}  inset !important;
    -webkit-text-fill-color: ${(props)=>props.customStyle ? "var(--primary)": "var(--text)"} !important;
    padding: 11.5px 0 !important;
  }

  & :-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px ${(props)=>props.customStyle ? "#070012": "#1f0f39"} inset !important;
    -webkit-text-fill-color:${(props)=>props.customStyle ? "var(--primary)": "var(--text)"} !important;
    padding: 11.5px 0 !important;
  }

  & :-webkit-autofill:hover {
    box-shadow: 0 0 0px 1000px ${(props)=>props.customStyle ? "#070012": "#1f0f39"}  inset !important;
    -webkit-text-fill-color: ${(props)=>props.customStyle ? "var(--primary)": "var(--text)"} !important;
    padding: 11.5px 0 !important;
  }

  & :-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px ${(props)=>props.customStyle ? "#070012": "#1f0f39"}  inset !important;
    -webkit-text-fill-color:${(props)=>props.customStyle ? "var(--primary)": "var(--text)"} !important;
    padding: 11.5px 0 !important;
  }
  .css-152mnda-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill {
    border-radius: initial !important;
  }
`
const HelperText = styled('div')<{error?: boolean}>`
  ${TEXT_12_700}
  margin-top: 4px;
  margin-left: 8px;
  font-family: 'Ubuntu', 'san serif';
  color: ${(props) => props.error ? 'var(--error)' : 'var(--primary)'};
`;

export const ClearIcon = styled('div')`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
