import React from 'react';

import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import Fields from '../../Fields/Fields';
import { TFormBuilderProps } from './FormBuilder.types';

const FormBuilder: React.FC<TFormBuilderProps> = ({ fields, onSubmit }) => {
  const form = useForm();

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
