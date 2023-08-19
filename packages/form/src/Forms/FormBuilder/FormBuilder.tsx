import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../hooks/config/useConfig';
import Actions from '../../Actions/Actions';

const FormBuilder: React.FC<TFormBuilderProps> = ({ fields, actions }) => {
  const form = useForm();
  const config: any = useConfig((state) => state);

  useEffect(() => {
    config?.api.get('todos/1').then((res: any) => {
      console.log('🚀 ~ file: FormBuilder.tsx:23 ~ useEffect ~ res:', res);
    });
  }, []);


  console.log(form.formState.errors , form.getValues())

  return (
    <form onSubmit={form.handleSubmit(console.log)}>
      <Fields list={fields} form={form} />
      <Actions list={actions}/>
    </form>
  );
};

export default FormBuilder;
