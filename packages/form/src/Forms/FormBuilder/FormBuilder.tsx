import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../hooks/formController/formController';
import { useQuery } from '@tanstack/react-query';
import { ACTION_TYPE } from '../../Actions/ActionsBuilder/ActionsBuilder.types';

const FormBuilder = ({ fields, actions, id = useId(), form = useForm() }: TFormBuilderProps) => {
  const { api } = useConfig();
  const { setForm } = useFormController();

  useEffect(() => {
    setForm(id, form)
  }, [id, form]);


  const { data, refetch } = useQuery({
    queryFn: (res) => {
      api(actions[ACTION_TYPE.SUBMIT].api || {});
      console.log("tetsg", res);

    },
    queryKey: ['onSubmitForm', id],
    onSuccess: (res) => {
      console.log("--pppppppp:", res);
    },
    onError: (res) => {
      console.log("eroooooor:", res);
    },
    enabled: false
  });

  console.log("--", { data })


  const onSubmit = (_data: any) => {
    form.reset();
    refetch();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Fields list={fields} form={form} />
      <Actions list={actions} formId={id} />
    </form>
  );
};

export default FormBuilder;
