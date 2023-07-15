import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';
import { useConfig } from '../../config/useConfig';

const FormBuilder: React.FC<TFormBuilderProps> = ({ fields, onSubmit }) => {
  const form = useForm();
  const config: any = useConfig((state) => state);

  useEffect(() => {
    config?.api.get('todos/1').then((res: any) => {
      console.log('🚀 ~ file: FormBuilder.tsx:23 ~ useEffect ~ res:', res);
    });
  }, []);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Fields list={fields} form={form} />
      <Button variant='contained' color='primary' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default FormBuilder;
