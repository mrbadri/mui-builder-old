import React from 'react';

import { FIELD_TYPE, TFieldBuilderProps } from './FieldBuilder.types';
import BaseInput from './BaseInput/BaseInput';

const Controller: any = {
  [FIELD_TYPE.TEXT]: BaseInput,
};

const FieldBuilder = (props: TFieldBuilderProps) => {
  const Field = Controller?.[props?.type] ?? BaseInput;

  return (
    <div>
      <Field {...props} />
    </div>
  );
};

export default FieldBuilder;
