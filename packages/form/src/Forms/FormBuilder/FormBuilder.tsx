import React, { useEffect, useId } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';
import useFormController from '../../hooks/formController/formController';

const FormBuilder: React.FC<TFormBuilderProps> = ({ fields, actions, id = useId(), form = useForm() }) => {
  const config: any = useConfig();
  const { setForm } = useFormController();

  useEffect(() => {
    config?.api.get('todos/1').then((res: any) => {
      console.log('🚀 ~ file: FormBuilder.tsx:23 ~ useEffect ~ res:', res);
    });
  }, []);

  useEffect(() => {
    setForm(id, form)
  }, [form, id]);


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
