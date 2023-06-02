import React from 'react';

import { TFieldsProps } from './Fields.types';
// import FieldBuilder from './FieldBuilder/FieldBuilder';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const Fields = ({ form, list }: TFieldsProps) => {
  const { control, formState, watch } = form;

  const controller = new Function('value', 'console.log(value)');

  controller(watch());

  return (
    <>
      {list.map((fieldProps: TFieldProps, index: number) => (
        <Controller
          key={index}
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
                console.log('hi');
                console.log('form', form, formState, formState.errors);
              }}
              error={!!formState.errors[field.name]}
              helperText={formState.errors[field.name]?.message as string}
              {...new Function('fields', fieldProps?.controller || '')(watch())}
            />
          )}
        />
      ))}
    </>
  );
};

export default Fields;
