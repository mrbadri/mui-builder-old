import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
// import { useConfig } from '../../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../../hooks/formController/formController';
// import { useQuery } from '@tanstack/react-query';
import { ACTION_TYPE } from '../../Actions/ActionsBuilder/ActionsBuilder.types';
import { AxiosRequestConfig } from 'axios';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { initialConfigFormBuilder } from './FormBuilder.constant';
import useCustomQuery from '../../../hooks/customQuery/useCustomQuery';
// import convertFunction from '../../../utils/convertFuunction/convertFuunction';
// import handleQueryFn from '../../../utils/handleQueryFn/handleQueryFn';

const FormBuilder = ({ fields, actions, id = useId(), form = useForm(), config = initialConfigFormBuilder }: TFormBuilderProps) => {
  // const { api } = useConfig();
  const { setForm } = useFormController();

  // SAVE FORM ID
  useEffect(() => {
    setForm(id, form)
  }, [id, form]);

  // SUBMIT ACTION
  const actionSubmit = actions[ACTION_TYPE.SUBMIT];
  const ApiConfig: AxiosRequestConfig = actionSubmit.api || {};
  const onSuccess = actionSubmit?.onSuccess;
  const onError = actionSubmit?.onError;

  const { refetch } = useCustomQuery(ApiConfig, form, {
    queryKey: ['onSubmitForm', id],
    onSuccess: (res) => {
      console.log("Success", res);
      if (onSuccess) onSuccess(res, form)
      form.reset();
    },
    onError: (res) => {
      console.log("Error:", res);
      if (onError) onError(res, form)
    },
  });


  // CONFIG
  const { layout } = config;

  return (
    <form onSubmit={form.handleSubmit(refetch)}>
      <Grid2 container {...layout}>
        <Fields list={fields} form={form} />
        <Actions list={actions} formId={id} />
      </Grid2>
    </form>
  );
};

export default FormBuilder;
