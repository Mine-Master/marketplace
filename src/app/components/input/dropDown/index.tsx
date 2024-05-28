import { FC } from 'react';
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectProps,
  styled,
} from '@mui/material';
import { ThreeDotLoadingIndicator } from 'app/components/ThreeDotLoadingIndicator/threeDotLoading';

interface Option {
  label: string;
  value: number | string;
}

interface DropDown {
  options: Option[] | (string | number)[];
  isLoading?: boolean;
  placeholder?: string;
}

type Props = DropDown & SelectProps;

const BaseDropdownInput: FC<Props> = ({ isLoading, placeholder, options, ...props }) => {
  const renderValue = (selected: unknown) => {
    if (selected === '') {
      return <em>{placeholder}</em>;
    }

    const selectedOption = (options as Option[]).find(option =>
      typeof option === 'object' ? option.value === selected : option === selected
    );

    return typeof selectedOption === 'object' ? selectedOption.label : selectedOption;
  };

  return (
    <FormControl size="small" fullWidth={props.fullWidth}>
      <BSelect
        value={props.value ?? ''}
        name={props.name}
        onChange={props.onChange}
        placeholder={placeholder}
        displayEmpty
        input={<OutlinedInput />}
        renderValue={renderValue}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: 'rgba(16, 0, 43, 1)',
              margin: '8px',
              borderRadius: '16px',
            },
          },
        }}
        {...props}
      >
        {isLoading ? (
          <MenuItem disabled>
            <ThreeDotLoadingIndicator />
          </MenuItem>
        ) : (
          options.map((option, index) => (
            <MenuItem key={index} value={typeof option === 'object' ? option.value : option}>
              {typeof option === 'object' ? option.label : option}
            </MenuItem>
          ))
        )}
      </BSelect>
    </FormControl>
  );
};

export const BSelect = styled(Select)(() => ({
  height: '48px',
  width: '320px',
  color: 'var(--text)',
  
  borderRadius: '16px',
  '& .MuiInputBase-root': {
    fontSize: '14px',
    fontWight:'700',
    fontFamily: 'Ubuntu, sans-serif',
    paddingRight: '30px !important',
  },
  '& .MuiFormControl-root ': { height: 'auto' },
  '& .MuiTextField-root ': { height: 'auto' },
  '& .MuiChip-label': { fontSize: '12px' },
  backgroundColor: 'rgba(254, 247, 255, 0.05)',
  fontFamily: 'Ubuntu, sans-serif',
  '& input': {
    height: '2px',
    fontSize: '12px !important',
  },
  boxShadow: '0px -4px 8px 0px rgba(36, 0, 70, 0.34) inset',

  '& .MuiOutlinedInput-input': {},
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: `none`,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: `none`,
  },
  '& legend': {
    fontSize: '11px',
  },
  '&.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
    backgroundColor: 'rgba(16, 0, 43, 1) !important',
  },
}));

export default BaseDropdownInput;
