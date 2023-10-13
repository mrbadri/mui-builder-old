import React, { useEffect } from 'react';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Controller } from 'react-hook-form';
import useFieldsStore from '../../hooks/useFieldsStore/useFieldsStore';
import useFromsStore from '../../hooks/useFormsStore/useFormsStore';
import convertFunction from '../../utils/convertFuunction/convertFuunction';
import FieldBuilder from './FieldBuilder/FieldBuilder';
import { TFieldsProps } from './Fields.types';
import useController from '../../hooks/useController/useController';

// import { getLIstWatch } from './Fields.tools';

const Fields = ({ formId }: TFieldsProps) => {

  const controller = useController(formId);

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
        const { col = {}, script, rules, ...fieldProps } = currentFormFields[id];
        const { xs = 12, sm, md, lg } = col;
        const getConditionalProps = convertFunction(script?.fn, "controller", "fieldId");
        const getDependencyConditionalProps = convertFunction(script?.dependency, "controller", 'fieldId');

        console.log({dep:getDependencyConditionalProps(controller, id)});
        

        // TODO: #condition add alternative controller from state management
        useEffect(() => { getConditionalProps(controller, id); }, [getDependencyConditionalProps(controller, id)]);

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
                    formid={formId}
                    value={field?.value || ''}
                    error={!!currentForm.formState.errors[field.name]}
                    label={currentForm.formState.errors[field.name]?.message || fieldProps?.label}
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
