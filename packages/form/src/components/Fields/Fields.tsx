import React, { useMemo } from 'react';

import { TFieldsProps } from './Fields.types';
import { Controller } from 'react-hook-form';
import { getLIstWatch } from './Fields.tools';
// import controllerFunction from '../utils/controllerFunction/controllerFunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import convertFunction from '../../utils/convertFuunction/convertFuunction';

const Fields = ({ form, list }: TFieldsProps) => {
  // DESTRUCTURE FORM
  const { control, formState, getValues, watch } = form;

  //TODO: #type
  const listWatch: any = useMemo(() => getLIstWatch(list), [list]);
  watch(listWatch);

  return (
    <>
      {Object.keys(list).map((id: string): any => {
        // DESTRUCTURE PROPS
        const { col = {}, controller = '', rules, ...fieldProps } = list[id];
        const { xs = 12, sm, md, lg } = col;
        const getConditionalProps = convertFunction(controller, "fields", "form");
        const { hide, ...conditionalProps } = getConditionalProps(getValues(), form);

        if (!hide)
          return (
            <Grid2 key={id} xs={xs} sm={sm} md={md} lg={lg}>
              <Controller
                name={id}
                rules={rules}
                control={control}
                render={({ field }: any): any => {
                  return (
                    <FieldBuilder
                      {...fieldProps}
                      {...field}
                      id={id}
                      form={form}
                      onChange={field.onChange}
                      value={field?.value || ''}
                      error={!!formState.errors[field.name]}
                      label={formState.errors[field.name]?.message || fieldProps?.label}
                      {...conditionalProps}
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
