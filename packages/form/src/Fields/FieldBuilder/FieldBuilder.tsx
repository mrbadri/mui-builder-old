import React, { useEffect } from 'react';

import { FIELD_TYPE, TFieldBuilderProps } from './FieldBuilder.types';
import BaseInput from './BaseInput/BaseInput';
import Text from './Text/Text';
import Textarea from './Textarea/Textarea';

const Controller: any = {
  [FIELD_TYPE.TEXT]: Text,
  [FIELD_TYPE.TEXTAREA]: Textarea,
};

const FieldBuilder = (props: TFieldBuilderProps) => {
  const Field = Controller?.[props?.type] ?? BaseInput;
  const { setValue } = props.form;

  useEffect(() => {
    return () => {
      // INFO: for handle value when a component hide or show
      setValue(props?.name, null);
    };
  }, []);

  return <Field {...props} />;
};

export default FieldBuilder;
