import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";

interface BaseInputProps extends InputProps {
  errorText?: string;
  notFound?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = ({
  errorText,
  notFound = false,
  ...props
}) => {
  return (
    <FormControl>
      <Input {...props} />
      {notFound && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default BaseInput;
