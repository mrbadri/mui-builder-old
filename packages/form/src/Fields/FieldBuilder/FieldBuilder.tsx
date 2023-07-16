import React, { forwardRef, useEffect } from 'react';

import { FIELD_TYPE, TFieldBuilderProps } from './FieldBuilder.types';
import BaseInput from './BaseInput/BaseInput';
import Text from './Text/Text';
import Textarea from './Textarea/Textarea';
import RadioButton from './RadioButton/RadioButton';
import Checkbox from './Checkbox/Checkbox';
import Select from './Select/Select';
import MultiSelect from './MultiSelect/MultiSelect';

const Controller: any = {
  [FIELD_TYPE.TEXT]: Text,
  [FIELD_TYPE.TEXTAREA]: Textarea,
  [FIELD_TYPE.RADIO]: RadioButton,
  [FIELD_TYPE.CHECKBOX]: Checkbox,
  [FIELD_TYPE.SELECT]: Select,
  [FIELD_TYPE.MULTI_SELECT]: MultiSelect,
};

const FieldBuilder = forwardRef((props: TFieldBuilderProps, ref) => {
  const Field = Controller?.[props?.type] ?? BaseInput;
  const { setValue } = props.form;

  useEffect(() => {
    return () => {
      // INFO: for handle value when a component hide or show
      setValue(props?.name, null);
    };
  }, []);

  return <Field {...props} ref={ref} />;
});

export default FieldBuilder;
