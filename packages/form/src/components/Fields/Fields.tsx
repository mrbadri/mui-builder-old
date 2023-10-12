import React, { useMemo } from 'react';

import { Controller } from 'react-hook-form';
import { TFieldsProps } from './Fields.types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import useFieldsStore from '../../hooks/useFieldsStore/useFieldsStore';
import useFromsStore from '../../hooks/useFormsStore/useFormsStore';
import convertFunction from '../../utils/convertFuunction/convertFuunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';

// import { getLIstWatch } from './Fields.tools';

const Fields = ({ formId }: TFieldsProps) => {
  // FORMS
  const { forms } = useFromsStore();
  const currentForm = forms[formId];

  // FIELDS
  const { fields } = useFieldsStore();
  const currentFormFields = fields[formId];

  currentForm.watch();


  //TODO: #type
  // const listWatch: any = useMemo(() => getLIstWatch(currentFormFields), [currentFormFields]);
  // currentForm.watch(listWatch);

  return (
    <>
      {Object.keys(currentFormFields).map((id: string): any => {
        // DESTRUCTURE PROPS
        const { col = {}, controller, rules, ...fieldProps } = currentFormFields[id];
        const { xs = 12, sm, md, lg } = col;
        const getConditionalProps = convertFunction(controller?.fn, "form", "fields");
        const getDependencyConditionalProps = convertFunction(controller?.dependency, "form");
        // TODO: #condition add alternative controller from state management
        const { hide, ...conditionalProps }: any = useMemo(() => getConditionalProps(currentForm, currentForm.getValues()), [getDependencyConditionalProps(currentForm)]);

        return (
          <Grid2 key={id} xs={xs} sm={sm} md={md} lg={lg}>
            <Controller
              name={id}
              rules={rules}
              control={currentForm.control}
              render={({ field }: any): any => {
                return (
                  <FieldBuilder
                    {...fieldProps}
                    {...field}
                    id={id}
                    form={currentForm}
                    formid={formId}
                    onChange={field.onChange}
                    value={field?.value || ''}
                    error={!!currentForm.formState.errors[field.name]}
                    label={currentForm.formState.errors[field.name]?.message || fieldProps?.label}
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
