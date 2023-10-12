import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import Actions from '../../Actions/Actions';
import { ACTION_TYPE } from '../../Actions/ActionsBuilder/ActionsBuilder.types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { initialConfigFormBuilder } from './FormBuilder.constant';
import useCustomQuery from '../../../hooks/customQuery/useCustomQuery';
import useController from '../../../hooks/useController/useController';

const FormBuilder = ({ fields, actions, formId = useId(), form = useForm(), config = initialConfigFormBuilder }: TFormBuilderProps) => {
  const controller = useController(formId);
  const { addFields, addForms, addActions } = controller;

  // SAVE FORM ID
  useEffect(() => {
    addActions({ formId, actions });
    addFields({ formId, fields });
    addForms({ formId, form });
  }, [formId]);

  // SUBMIT ACTION
  const actionSubmit = actions[ACTION_TYPE.SUBMIT];

  const { refetch } = useCustomQuery(
    actionSubmit?.api?.config || {},
    formId,
    {
      queryKey: ['onSubmitForm', formId],
      ...actionSubmit?.api?.query
    });


  // CONFIG
  const { layout } = config;

  console.count("Render:");

  if (controller?.actions?.[formId] && controller?.forms?.[formId] && controller?.fields?.[formId])
    return (
      <form onSubmit={form.handleSubmit(refetch)}>
        <Grid2 container {...layout}>
          <Fields formId={formId} />
          <Actions formId={formId} />
        </Grid2>
      </form>
    );


  return <></>;
};

export default FormBuilder;
