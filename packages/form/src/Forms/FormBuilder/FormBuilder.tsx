import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../hooks/formController/formController';
import { useQuery } from '@tanstack/react-query';
import { ACTION_TYPE } from '../../Actions/ActionsBuilder/ActionsBuilder.types';
import { AxiosRequestConfig } from 'axios';

const FormBuilder = ({ fields, actions, id = useId(), form = useForm() }: TFormBuilderProps) => {
  const { api } = useConfig();
  const { setForm } = useFormController();

  useEffect(() => {
    setForm(id, form)
  }, [id, form]);

  const actionSubmit = actions[ACTION_TYPE.SUBMIT];
  const configApi: AxiosRequestConfig = actionSubmit.api || {};
  const onSuccess = actionSubmit?.onSuccess;
  const onError = actionSubmit?.onError;


  const { refetch } = useQuery({
    queryFn: () => {
      api({ ...configApi, data: { ...configApi.data, ...form.getValues() } });
    },
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
    enabled: false
  });

  return (
    <form onSubmit={form.handleSubmit(refetch)}>
      <Fields list={fields} form={form} />
      <Actions list={actions} formId={id} />
    </form>
  );
};

export default FormBuilder;
