import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../hooks/formController/formController';
import { useMutation } from '@tanstack/react-query';

const FormBuilder = ({ fields, actions, id = useId(), form = useForm() }: TFormBuilderProps) => {
  const { api } = useConfig();
  const { setForm } = useFormController();

  useEffect(() => {
    setForm(id, form)
  }, [id, form]);

  const { mutate } = useMutation({
    mutationFn: () => api({ url: 'https://jsonplaceholder.typicode.com/todos/1', method: 'get' }),
    onSuccess: (res) => {
      console.log("--pppppppp:", res);
    },
    onError: (res) => {
      console.log("eroooooor:", res)
    }
  });


  const onSubmit = (_data: any) => {
    form.reset();
    mutate();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Fields list={fields} form={form} />
      <Actions list={actions} formId={id} />
    </form>
  );
};

export default FormBuilder;
