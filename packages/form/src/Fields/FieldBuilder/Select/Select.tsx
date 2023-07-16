import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const Select = (props: any) => {
  const { helperText, error, label, onChange, value, ...otherProps } = props;
  const { setValue } = props.form;

  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(option: any, value) => option?.value === value?.value}
      renderInput={(params) => <TextField helperText={helperText} error={error} label={label} {...params} />}
      options={otherProps.options}
      onChange={(_event, newInputValue) => {
        setValue(props?.name, newInputValue.id);
      }}
      {...otherProps}
    />
  );
};

export default Select;
