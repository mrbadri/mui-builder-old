import React from 'react';
import FormBuilder from './FormBuilder/FormBuilder';
import { TFormBuilderProps } from './FormBuilder/FormBuilder.types';
import { TFormProps } from './Forms.types';

const Forms = (props: TFormProps) => {
  return props.list.map((formProps: TFormBuilderProps, index) => <FormBuilder key={index} {...formProps} />);
};

export default Forms;
