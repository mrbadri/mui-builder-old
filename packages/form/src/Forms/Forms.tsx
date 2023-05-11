import React from 'react';
import FormBuilder from './FormBuilder/FormBuilder';

const Forms = (props: any) => {
  return props.list.map((formProps: any, index: number) => <FormBuilder key={index} {...formProps} />);
};

export default Forms;
