import React from 'react';

import { TFieldsProps } from './Fields.types';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { getListWatch } from './Fields.tools';

const Fields = ({ form, list }: TFieldsProps) => {
  const { control, formState, watch, getValues } = form;
  

  return (
    <>
      {list.map((fieldProps: TFieldProps) => (
        <Controller
          key={fieldProps?.name}
          control={control}
          name={fieldProps?.name}
          rules={fieldProps?.rules}
          render={({ field }) => (
            <TextField
              {...field}
              {...fieldProps}
              label={fieldProps?.label}
              onChange={(e) => {
                field.onChange(e);
              }}
              error={!!formState.errors[field.name]}
              onLoad={() => watch(getListWatch(fieldProps?.controller))}
              helperText={formState.errors[field.name]?.message as string}
              {...(!!fieldProps?.controller && new Function('fields', fieldProps?.controller || '')(getValues()))}
            />
          )}
        />
      ))}
    </>
  );
};

export default Fields;
