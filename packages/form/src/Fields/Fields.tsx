import React, { useMemo } from 'react';

import { TFieldsProps } from './Fields.types';
import { Controller } from 'react-hook-form';
import { getLIstWatch } from './Fields.tools';
import controllerFunction from '../utils/controllerFunction/controllerFunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const Fields = ({ form, list }: TFieldsProps) => {
  const { control, formState, getValues, watch } = form;

  const listWatch: any = useMemo(() => getLIstWatch(list), [list]);
  watch(listWatch);

  return (
    <>
      {Object.keys(list).map((key: string): any => {
        const { col = {}, ...fieldProps } = list[key];
        const { xs = 12, sm, md, lg } = col;

        const controller = fieldProps?.controller && controllerFunction(fieldProps?.controller, getValues());

        if (!(!!controller && !!controller?.hide))
          return (
            <Grid2 xs={xs} sm={sm} md={md} lg={lg}>
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
                      form={form}
                      name={fieldProps?.name}
                      value={field?.value || ''}
                      onChange={field.onChange}
                      error={!!formState.errors[field.name]}
                      label={formState.errors[field.name]?.message  || fieldProps?.label}
                      {...controller}
                    />
                  );
                }}
              />
            </Grid2>
          );
      })}
    </>
  );
};

export default Fields;
