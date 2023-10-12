import React, { useEffect, useMemo } from 'react';

import { TFieldsProps } from './Fields.types';
import { Controller } from 'react-hook-form';
import { getLIstWatch } from './Fields.tools';
// import controllerFunction from '../utils/controllerFunction/controllerFunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import convertFunction from '../../utils/convertFuunction/convertFuunction';
import useFormController from '../../hooks/formController/formController';

const Fields = ({ formId }: TFieldsProps) => {

  const { formControllers } = useFormController();

  // TODO: add form ID
  const controller = formControllers[formId];
  const { form, fields } = controller;

  // DESTRUCTURE FORM
  const { control, formState, watch } = form;

  useEffect(() => {
    if (controller?.updateField)
      controller?.updateField(formId, "FieldText1", { label: "testHook444" });
  }, []);


  //TODO: #type
  const listWatch: any = useMemo(() => getLIstWatch(fields), [fields]);
  watch(listWatch);


  return (
    <>
      {Object.keys(fields).map((id: string): any => {
        // DESTRUCTURE PROPS
        const { col = {}, controller, rules, ...fieldProps } = fields[id];
        const { xs = 12, sm, md, lg } = col;
        const getConditionalProps = convertFunction(controller?.fn, "form", "fields");
        const getDependencyConditionalProps = convertFunction(controller?.dependency, "form");
        // TODO: #condition add alternative controller from state management
        const { hide, ...conditionalProps }: any = useMemo(() => getConditionalProps(form, form.getValues()), [getDependencyConditionalProps(form)]);

        console.log("-----");
        console.log({ id ,  conditionalProps });
        console.log("-----");



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
