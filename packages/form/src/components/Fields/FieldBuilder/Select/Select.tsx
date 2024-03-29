import { Autocomplete } from '@mui/material';
import React, { forwardRef } from 'react';
import BaseInput from '../BaseInput/BaseInput';
import useFromsStore from '../../../../hooks/useFormsStore/useFormsStore';
// import { useQuery } from '@tanstack/react-query';
// import { useConfig } from '../../../hooks/config/useConfig';

const Select = forwardRef((props: any, ref) => {
  const { helperText, error, label, onChange, ...otherProps } = props;

  const { forms } = useFromsStore();
  const currentForm = forms[props.formid];


  // TODO: handle API Option 
  // const { api } = useConfig();

  // const actionSubmit = actions[ACTION_TYPE.SUBMIT];
  // const ApiConfig: AxiosRequestConfig = actionSubmit.api || {};
  // const onSuccess = actionSubmit?.onSuccess;
  // const onError = actionSubmit?.onError;

  // const { refetch } = useQuery({
  //   queryFn: () => {
  //     api(ApiConfig);
  //   },
  //   queryKey: ['onSubmitForm'],
  //   onSuccess: (res) => {
  //     console.log("Success", res);
  //     if (onSuccess) onSuccess(res)
  //   },
  //   onError: (res) => {
  //     console.log("Error:", res);
  //     if (onError) onError(res)
  //   },
  //   enabled: false
  // });

  return (
    <Autocomplete
      isOptionEqualToValue={(option: any, value) => {
        return (option?.id === value?.id)
      }}
      defaultValue={{ label: '', value: '' }}
      renderInput={(params) => <BaseInput helperText={helperText} error={error} label={label} {...params} />}
      options={otherProps.options}
      onChange={(_event, newInputValue) => {
        currentForm.setValue(props?.id, newInputValue);
      }}
      ref={ref}
      {...otherProps}
    />
  );
});

export default Select;
