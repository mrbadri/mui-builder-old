import React from 'react';

import { TFieldsProps } from './Fields.types';
import FieldBuilder from './FieldBuilder/FieldBuilder';
import { TFieldProps } from './FieldBuilder/FieldBuilder.types';

const Fields = (props: TFieldsProps) => {
  if (!props?.list) return <>Please Add fields</>;

  return props?.list.map((FieldBuilderProps: TFieldProps, index: number) => (
    <FieldBuilder key={index} {...FieldBuilderProps} {...props} />
  ));
};

export default Fields;
