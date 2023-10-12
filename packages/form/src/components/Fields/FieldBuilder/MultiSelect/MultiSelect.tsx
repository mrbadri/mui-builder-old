import { Autocomplete } from '@mui/material';
import React, { forwardRef } from 'react';
import BaseInput from '../BaseInput/BaseInput';
import useFromsStore from '../../../../hooks/useFormsStore/useFormsStore';

const MultiSelect = forwardRef((props: any, ref) => {
  const { helperText, error, label, onChange, value, ...otherProps } = props;

  const { forms } = useFromsStore();
  const currentForm = forms[props.formid];

  return (
    <Autocomplete
      isOptionEqualToValue={(option: any, value) => option?.value === value?.value}
      renderInput={(params) => <BaseInput helperText={helperText} error={error} label={label} {...params} />}
      onChange={(_event, newInputValue) => {
        currentForm.setValue(props?.id, newInputValue);
      }}
      options={otherProps.options}
      multiple
      ref={ref}
      {...otherProps}
    />
  );
});

export default MultiSelect;
