import { Autocomplete } from '@mui/material';
import React, { forwardRef } from 'react';
import BaseInput from '../BaseInput/BaseInput';

const Select = forwardRef((props: any, ref) => {
  const { helperText, error, label, onChange, ...otherProps } = props;
  const { setValue } = props.form;

  return (
    <Autocomplete
      isOptionEqualToValue={(option: any, value) => {
        console.log({ option, value })
        return (option?.value === value?.value)
      }}
      renderInput={(params) => <BaseInput helperText={helperText} error={error} label={label} {...params} />}
      options={otherProps.options}
      onChange={(_event, newInputValue) => {
        setValue(props?.id, newInputValue);
      }}
      ref={ref}
      {...otherProps}
    />
  );
});

export default Select;
