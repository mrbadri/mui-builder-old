import React, { useEffect } from 'react';

import { FIELD_TYPE, TFieldBuilderProps } from './FieldBuilder.types';
import BaseInput from './BaseInput/BaseInput';

const Controller: any = {
  [FIELD_TYPE.TEXT]: BaseInput,
};

const FieldBuilder = (props: TFieldBuilderProps) => {
  const Field = Controller?.[props?.type] ?? BaseInput;
  const { setValue } = props.form;

  useEffect(() => {
    return () => {
      setValue(props?.name, null);
    };
  }, []);

  return <Field {...props} />;
};

export default FieldBuilder;
