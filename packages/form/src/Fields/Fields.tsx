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
      {Object.keys(list).map((key: string) => {
        const fieldProps: TFieldProps = list[key];
        const controller = fieldProps?.controller && controllerFunction(fieldProps?.controller, getValues());

        return (
          <>
            {!!controller && !!controller?.hide ? null : (
              <Controller
                key={key}
                control={control}
                name={fieldProps?.name}
                rules={fieldProps?.rules}
                render={({ field }) => {
                  return (
                    <FieldBuilder
                      {...field}
                      {...fieldProps}
                      form={form}
                      value={field?.value || ''}
                      label={fieldProps?.label}
                      onChange={(e: any) => {
                        field.onChange(e);
                      }}
                      error={!!formState.errors[field.name]}
                      helperText={formState.errors[field.name]?.message as string}
                      {...controller}
                    />
                  );
                }}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default Fields;
