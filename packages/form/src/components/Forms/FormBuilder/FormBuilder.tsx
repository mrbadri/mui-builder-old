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

const FormBuilder = ({ fields, actions, id = useId(), form = useForm(), config = initialConfigFormBuilder }: TFormBuilderProps) => {
  const { setForm, formControllers } = useFormController();

  // SAVE FORM ID
  useEffect(() => {
    setForm(id, { form, fields, actions, config });
  }, [id]);

  // SUBMIT ACTION
  const actionSubmit = actions[ACTION_TYPE.SUBMIT];
  // const { config =, query } = actionSubmit?.api || {  };
  // const onSuccess = actionSubmit?.onSuccess;
  // const onError = actionSubmit?.onError;


  const { refetch } = useCustomQuery(
    actionSubmit?.api?.config || {},
    id,
    {
      queryKey: ['onSubmitForm', id],
      ...actionSubmit?.api?.query
    });


  // CONFIG
  const { layout } = config;


  if (!!formControllers?.[id]?.form)
    return (
      <form onSubmit={form.handleSubmit(refetch)}>
        <Grid2 container {...layout}>
          <Fields formId={id} />
          <Actions formId={id} />
        </Grid2>
      </form>
    );


  return <></>;
};

export default FormBuilder;
