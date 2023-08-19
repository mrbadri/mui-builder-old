import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../hooks/formController/formController';

const FormBuilder = ({ fields, actions, id = useId(), form = useForm() }: TFormBuilderProps) => {
  const { api } = useConfig();
  const { setForm } = useFormController();

  useEffect(() => {
    api?.get('todos/1')?.then((res: any) => {
      console.log('🚀 ~ file: FormBuilder.tsx:23 ~ useEffect ~ res:', res);
    });
  }, [api]);

  useEffect(() => {
    setForm(id, form)
  }, [id, form]);


  const onSubmit = (data: any) => {
    form.reset();
    console.log({ data })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Fields list={fields} form={form} />
      <Actions list={actions} formId={id} />
    </form>
  );
};

export default FormBuilder;
