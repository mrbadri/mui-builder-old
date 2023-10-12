import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import Actions from '../../Actions/Actions';
import useFormController from '../../../hooks/formController/formController';
import { ACTION_TYPE } from '../../Actions/ActionsBuilder/ActionsBuilder.types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { initialConfigFormBuilder } from './FormBuilder.constant';
import useCustomQuery from '../../../hooks/customQuery/useCustomQuery';
import useController from '../../../hooks/useController/useController';
import useActionsStore from '../../../hooks/useActionsStore/useActionsStore';

const FormBuilder = ({ fields, actions, formId = useId(), form = useForm(), config = initialConfigFormBuilder }: TFormBuilderProps) => {
  const { setForm, formControllers } = useFormController();

  const controller = useController(formId);
  const {  addFields, addForms } = controller;

  const {addActions , actions:test} = useActionsStore();

  console.log('new --->', { controller , actions:test });


  // SAVE FORM ID
  useEffect(() => {
    addActions({ formId, actions });
    addFields({ formId, fields });
    addForms({ formId, form });

    setForm(formId, { form, fields, actions, config });
  }, [formId]);

  // SUBMIT ACTION
  const actionSubmit = actions[ACTION_TYPE.SUBMIT];
  // const { config =, query } = actionSubmit?.api || {  };
  // const onSuccess = actionSubmit?.onSuccess;
  // const onError = actionSubmit?.onError;


  const { refetch } = useCustomQuery(
    actionSubmit?.api?.config || {},
    formId,
    {
      queryKey: ['onSubmitForm', formId],
      ...actionSubmit?.api?.query
    });


  // CONFIG
  const { layout } = config;


  if (!!formControllers?.[formId]?.form)
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
