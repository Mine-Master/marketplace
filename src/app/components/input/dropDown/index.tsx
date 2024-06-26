import { FC, useState } from 'react';
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

const CustomArrowIcon = ({ open }: { open: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      cursor:'pointer',
      marginRight:'16px'
    }}
  >
    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="#FEF7FF"/>
  </svg>
);

const DropdownInput: FC<Props> = ({ isLoading, placeholder, options, ...props }) => {
  const [open, setOpen] = useState(false);

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
        IconComponent={() => <CustomArrowIcon open={open} />}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
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
    fontWight: '700',
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
  '&.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
    backgroundColor: 'rgba(16, 0, 43, 1) !important',
  },
}));

export default DropdownInput;
