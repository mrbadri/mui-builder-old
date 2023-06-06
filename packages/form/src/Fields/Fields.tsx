import React, { useMemo } from 'react';

import { TFieldsProps } from './Fields.types';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { getLIstWatch } from './Fields.tools';

const Fields = ({ form, list }: TFieldsProps) => {
  const { control, formState, getValues , watch } = form;

  const listWatch: any = useMemo(() => getLIstWatch(list), [list]);
  watch(listWatch)


  console.log('getValues():', getValues());

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
