import React, { useMemo } from 'react';

import { TFieldsProps } from './Fields.types';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';
import { Controller } from 'react-hook-form';
import { getLIstWatch } from './Fields.tools';
import controllerFunction from '../utils/controllerFunction/controllerFunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';

const Fields = ({ form, list }: TFieldsProps) => {
  const { control, formState, getValues, watch } = form;

  const listWatch: any = useMemo(() => getLIstWatch(list), [list]);
  watch(listWatch);

  return (
    <>
      {Object.keys(list).map((key: string): any => {
        const fieldProps: TFieldProps = list[key];
        const controller = fieldProps?.controller && controllerFunction(fieldProps?.controller, getValues());
      
        if (!(!!controller && !!controller?.hide))
          return (
            <Controller
              key={key}
              control={control}
              name={fieldProps?.name}
              rules={fieldProps?.rules}
              render={({ field }: any): any => {
                return (
                  <FieldBuilder
                    {...fieldProps}
                    {...field}
                    name={fieldProps?.name}
                    form={form}
                    value={field?.value || ''}
                    label={fieldProps?.label}
                    onChange={field.onChange}
                    error={!!formState.errors[field.name]}
                    helperText={formState.errors[field.name]?.message as string}
                    {...controller}
                  />
                );
              }}
            />
          );
      })}
    </>
  );
};

export default Fields;
