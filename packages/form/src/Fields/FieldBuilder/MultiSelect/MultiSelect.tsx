import { Autocomplete } from '@mui/material';
import React from 'react';
import BaseInput from '../BaseInput/BaseInput';

const MultiSelect = (props: any) => {
  const { helperText, error, label, onChange, value, ...otherProps } = props;
  const { setValue } = props.form;
  return (
    <Autocomplete
      isOptionEqualToValue={(option: any, value) => option?.value === value?.value}
      renderInput={(params) => <BaseInput helperText={helperText} error={error} label={label} {...params} />}
      options={otherProps.options}
      {...otherProps}
      multiple
      onChange={(_event, newInputValue) => {
        setValue(props?.name, newInputValue);
      }}
    />
  );
};

export default MultiSelect;
